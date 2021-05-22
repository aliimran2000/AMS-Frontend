import config from "../../config.json";
import axiosinstance from "./AxiosInstance";

class Authorization {
  private static isValidPassword(password: string) {
    if (password.length < 8 || password.length > 64) return false;
    return true;
  }

  static async register(username: string, email: string, password: string) {
    if (!this.isValidPassword(password)) return [false, "invalid password"];

    let response = await axiosinstance
      .post(config.api.endpoint.registration, {
        username: username,
        email: email,
        password: password,
      })
      .then(
        
        (response) => {
          localStorage.setItem("token", response.data.token);
          return [true, "successfully registered account"];
        },
        (error) => {
          //bugged
          try {
            var x;
            for (x in error.response.data.errors) {
              return [false, error.response.data.errors[x]];
            }
          }
          catch(e){
             console.log(e)
             return [false, "Failed Request try again"];
          }

          //return [false, "Failed Request try again "];
        }
      );

    console.log(response);
    return response;
  }

  static async login(username: string, password: string) {
    try {
      let response = await axiosinstance.post(config.api.endpoint.login, {
        email: username,
        password: password,
      });

      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        return [true, true];
      } else {
        return [false, response.error[0]];
      }
    } catch (error) {
      console.log("the error", error);
      return [false, "invalid login details"];
    }
  }
}

export default Authorization;
