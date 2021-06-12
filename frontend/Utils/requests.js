import { createContext, useContext, useState } from "react";
import axiosinstance from "./axios/AxiosInstance";

const Requests = createContext()

export function useRequestsContext() {
    return useContext(Requests)
}

export function RequestsContext(props) {

    function getRequests(callUrl) {
        axiosinstance.get(callUrl).then(response => {
            if (response.status == 200) {
                return response.data
            }
        }).catch(error => {
            console.log(error)
            return error
        })
    }

    const values = [
        getRequests,
    ]

    return (
        <Requests.Provider value={values}>
            {props.children}
        </Requests.Provider>
    )
}