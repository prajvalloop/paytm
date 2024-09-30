import { useEffect, useState } from "react";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Users(){
    const [filter,setfilter]=useState("")
    const [users,setUsers]=useState([])
   
    useEffect(()=>{
        const res=axios.get(`http://127.0.0.1:3000/api/v1/user/bulk?filter=${filter}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((response)=>{
            
            setUsers(response.data.user)
            
        })
    },[filter])
    
    return (
        <div className="p-3">
            <InputBox onChange={(e)=>{
                setfilter(e.target.value)
            }} label={"Users"} text_size={"text-lg"} font={"font-bold"} placeholder={"Search users..."}></InputBox>
                {users.map(function(user){
                return (
                <User key={user._id} user={user}></User>
                )
            })}
        </div>
    )
}
function User({user}){
    const navigate=useNavigate()
    return (
        <div className="flex justify-between p-2">
            <div className="flex">
            <div className="rounded-full text-white bg-slate-300 w-12 h-12 flex justify-center p-2 ml-2">
                    <div className="text-base text-center">
                {user.firstName[0]}
                    </div>
                </div>
            <div className="text-base font-semibold ml-2 p-2">
            {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} {user.lastName}
            </div>
            </div>
            <div>
                <Button onClick={()=>{
                    navigate(`/sendmoney?id=${user._id}&firstName=${user.firstName}`)
                }} label={"Send Money"}></Button>
            </div>

        </div>
    )
}