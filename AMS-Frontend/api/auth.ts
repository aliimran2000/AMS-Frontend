import config from '../config.json'
import api from './axios/AxiosInstance'

class Authorization {
    private static isValidPassword(password: string): boolean {
        if (password.length < 8 || password.length > 64)
            return false
        return true
    }
    static register(username: string, email: string, password: string): boolean {
        if (!this.isValidPassword(password))
            return false

        api.post(config["api"]["endpoint"]["registration"], {
            username: username,
            email: email,
            password: password,
        }).then((response) => {
            if (response.status != 200)
                throw 'Registration Failed'
            return response.data
        }).then((data) => {
            ///TODO: Data contains JWT, save it in cache and in api header(axiosInstance)
            //Talk it in meet api and axios Instance
        }).catch((error) => {
            console.log(error)
        })

        //TODO
        //Check if registration failed than return false
        return true;
    }
    static login(username: string, password: string): boolean {
        if (!this.isValidPassword(password))
            return false

        api.post(config["api"]["endpoint"]["login"], {
            username: username,
            password: password,
        }).then((response) => {
            if (response.status != 200)
                throw 'Registration Failed'
            return response.data
        }).then((data) => {
            ///TODO: Data contains JWT, save it in cache and in api header(axiosInstance)
            //Talk it in meet api and axios Instance
        }).catch((error) => {
            console.log(error)
        })

        //TODO
        //Check if login failed than return false
        return true;
    }
}

export default Authorization