import axios from 'axios'
import config from '../../config.json'


let baseURL = config.api.server;

let axiosinstance = null

if (process.browser && axiosinstance == null) {

    axiosinstance = axios.create({
        baseURL: baseURL,
        timeout: 1000,
        headers: {
            'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null,
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    })
    
}



// axiosinstance.interceptors.response.use(
//     response => response,
//     error => {
//         const originalRequest = error.config;

//         // Prevent infinite loops early
//         if (error.response.status === 401 && originalRequest.url === baseURL+'/api/AuthManagement/Refresh-Token') {
//             window.location.href = '/';
//             return Promise.reject(error);
//         }

//         if (error.response.data.code === "token_not_valid" &&
//             error.response.status === 401 && 
//             error.response.statusText === "Unauthorized") 

//             {
//                 const refreshToken = localStorage.getItem('refresh_token');

//                 if (refreshToken){
//                     const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

//                     // exp date in token is expressed in seconds, while now() returns milliseconds:
//                     const now = Math.ceil(Date.now() / 1000);
//                     console.log(tokenParts.exp);

//                     if (tokenParts.exp > now) {
//                         return axiosinstance
//                         .post('refresh/', {refresh: refreshToken})
//                         .then((response) => {

//                             localStorage.setItem('access_token', response.data.access);
//                             localStorage.setItem('refresh_token', response.data.refresh);

//                             axiosinstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
//                             originalRequest.headers['Authorization'] = "JWT " + response.data.access;

//                             return axiosinstance(originalRequest);
//                         })
//                         .catch(err => {
//                             console.log(err)
//                         });
//                     }else{
//                         console.log("Refresh token is expired", tokenParts.exp, now);
//                         window.location.href = '/';
//                     }
//                 }else{
//                     console.log("Refresh token not available.")
//                     window.location.href = '/';
//                 }
//         }


//       // specific error handling done elsewhere
//       return Promise.reject(error);
//   }
// );





export default axiosinstance;