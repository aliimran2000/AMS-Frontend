import config from '../../config.json'
import axiosinstance from './AxiosInstance.ts'



class Authorization {



    private static isValidPassword(password: string): boolean {
        if (password.length < 8 || password.length > 64)
            return false
        return true
    }

    static register(username: string, email: string, password: string): boolean {
        if (!this.isValidPassword(password))
            return false

        axiosinstance.post(config["api"]["endpoint"]["registration"], {
            username: username,
            email: email,
            password: password,
        }).then((response) => {
            if (response.status == 200){
                localStorage.setItem('token',response.data.token)
                window.location.href = '/loggedin';
            }
        }).then((data) => {
            ///TODO: Data contains JWT, save it in cache and in api header(axiosInstance)
            //Talk it in meet api and axios Instance
        }).catch((error) => {
            console.log(error)
        })

        
        return true;
    }

    static login(username: string, password: string): boolean {
        if (!this.isValidPassword(password))
            return false


        axiosinstance.post(config["api"]["endpoint"]["login"], {
            email: username,
            password: password,
        }
        ).then((response) => {
            if (response.status == 200){
                localStorage.setItem('token',response.data.token)
                window.location.href = '/loggedin';
            }
        }).catch((error) => {
            console.log(error)
                      
        })

        

        
    }
}

export default Authorization