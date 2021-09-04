import axios from "axios"
import { goToFeedPage, goToLogin } from "../Routes/Coordinator"
import {BASE_URL} from './BaseUrl'




export const login = (body, clear, history) => {
    const headers= {
        headers:{
     'Content-Type': "application/json"
        }}


    axios.post(`${BASE_URL}/users/login`,body,headers)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
        })
        .catch((err) => {
            alert(err.response.data.errors)
        })
}


export const signUp = (body, clear, history) => {
    const headers= {
        headers:{
     ContentType:"application/json"
        }}

    axios.post(`${BASE_URL}/users/signup`,body,headers)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToLogin(history)
        })
        .catch((err) => {
            alert(err.response.data.errors)
        })
}