import config from '../../config.json'
import axiosinstance from './AxiosInstance'



class Authorization {
    private static isValidPassword(password: string): boolean {
        if (password.length < 8 || password.length > 64)
            return false
        return true
    }

    static async register(username: string, email: string, password: string): Promise<boolean> {
        if (!this.isValidPassword(password))
            return false

        try {
            let response = await axiosinstance.post(config.api.endpoint.registration, {
                username: username,
                email: email,
                password: password,
            })
            if (response.status == 200) {
                localStorage.setItem('token', response.data.token)
                return true
            }
        }
        catch (error) {
            console.log(error)
            return false;
        }

        return false;
    }

    static async login(username: string, password: string): Promise<boolean> {
        if (!this.isValidPassword(password))
            return false

        try {
            let response = await axiosinstance.post(config.api.endpoint.login, {
                email: username,
                password: password,
            })

            if (response.status == 200) {
                localStorage.setItem('token', response.data.token)
                
                return true
            }
        }
        catch (error) {
            console.log(error)
            return false;
        }

        return false;
    }
}

export default Authorization