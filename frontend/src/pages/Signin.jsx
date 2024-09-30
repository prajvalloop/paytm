import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const [username,setuserName]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        const res=axios.get("http://127.0.0.1:3000/api/v1/user/me",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((response)=>{
            navigate("/dashboard")
        }).catch((err)=>{
            console.log("invalid token")
        })
    },[])
    return (
        <div className="bg-gray-100 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="w-80 text-center p-2 px-4 bg-white max-h-full shadow-lg">
            <Heading label={"Sign In"}></Heading>
            <SubHeading label={"Enter your credentials to access your account"}/>
            
            <InputBox onChange={(e)=>{
                setuserName(e.target.value)
            }} label={"Email"} placeholder={"johndoe@gmail.com"}></InputBox>
            <InputBox onChange={(e)=>{
                setPassword(e.target.value)
            }} label={"Password"} placeholder={""}></InputBox>
            <div className="pt-4">
            <Button onClick={async()=>{
                const res=await axios.post("http://127.0.0.1:3000/api/v1/user/signin",{
                    username,
                    password
                })
                localStorage.setItem("token",res.data.token)
                navigate("/dashboard")

            }} label={"Sign In"}></Button>
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
            </div>
            </div>
        </div>
    )
}