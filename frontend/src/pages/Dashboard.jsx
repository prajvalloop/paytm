import { useEffect, useState } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Dashboard(){
    const [balance,setbalance]=useState(0)
    const [firstName,setfirstName]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        
        const res=axios.get("http://127.0.0.1:3000/api/v1/account/balance",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((response)=>{
            setbalance(response.data.balance)
        })
        const resme=axios.get("http://127.0.0.1:3000/api/v1/user/me",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((response)=>{
            setfirstName(response.data.firstName.charAt(0).toUpperCase() + response.data.firstName.slice(1))
        }).catch((err)=>{
            navigate("/signin")
        })
    },[])
    return (
        <div>
            <AppBar firstName={firstName}/>
            <Balance value={balance}/>
            <Users/>
        </div>
    )
}