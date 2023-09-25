import { useEffect, useState } from "react";
import Layout from "./Layout";
import { Navigate } from "react-router";

export const PrivateComponent = ()=>{
    const [token,setToken] = useState(localStorage.getItem('access-token'));
    useEffect(()=>{
         setToken(localStorage.getItem('access-token'));
    },[token])
    return token ? <Layout /> : <Navigate to="/signin" />   
}