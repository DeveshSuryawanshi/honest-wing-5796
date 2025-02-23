import { USER_LOADING } from "../actionTypes";
import axios from "axios";

export const usersignup = (payload)=> (dispatch)=>{
    // console.log(payload,"Payloadf")
    dispatch({type:USER_LOADING})
    return axios.post("http://localhost:8080/users/register",payload)
}

export const userlogin = (data)=> (dispatch)=>{
    console.log(data)
    dispatch({type:USER_LOADING})
    return axios.post("https://graceful-gold-spacesuit.cyclic.cloud/users/login",data)
}


export const userlogout = (token) => (dispatch)=> {
    dispatch({type:USER_LOADING});

    return axios.get("https://graceful-gold-spacesuit.cyclic.cloud/users/logout",{
        headers:{
            "Authorization":token
        }})
}


export const userforgot = (data)=> (dispatch)=>{
    // console.log(data)
    dispatch({type:USER_LOADING})
    return axios.post("https://graceful-gold-spacesuit.cyclic.cloud/users/forgot",data);
}

export const usereset = (token,id,data)=> (dispatch)=>{
    dispatch({type:USER_LOADING})
    return axios.post(`https://graceful-gold-spacesuit.cyclic.cloud/users/resetpassword/${id}/${token}`,data);
}