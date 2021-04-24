import axios from 'axios'
import config from '../../config.json'

let axiosinstance = axios.create({
    baseURL: config["api"]["server"],
    timeout: 1000,
    /*
    headers: {
        ///TODO: JWT header goes here
    }
    */
})

export default axiosinstance;