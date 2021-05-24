import { createContext, useContext, useState } from "react";
import axiosinstance from "../Utils/axios/AxiosInstance";

const User = createContext([{}, () => { }])

export function useUserContext() {
    return useContext(User)
}

export function UserContext(props) {
    const [userData, setUserData] = useState(null)
    const [query, setQuery] = useState(true)

    function getUser() {
        axiosinstance.post('api/UserManagement/User-Context').then(response => {
            if (response.status == 200) {
                setUserData(response.data)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    if (query && axiosinstance != null) {
        getUser()
        setQuery(false)
    }

    return (
        <User.Provider value={userData}>
            {props.children}
        </User.Provider>
    )
}