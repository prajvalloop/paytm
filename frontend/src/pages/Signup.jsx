import { useEffect, useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios"
import { useNavigate } from "react-router-dom";
export function Signup(){
    const [username,setuserName]=useState("")
    const [firstName,setfirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [password,setpassword]=useState("")
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
            <Heading label={"Sign up"}></Heading>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox onChange={(e)=>{
                setfirstName(e.target.value)
            }} label={"First Name"} placeholder={"John"} />
            <InputBox onChange={(e)=>{
                setlastName(e.target.value)
            }} label={"Last Name"} placeholder={"Doe"}></InputBox>
            <InputBox onChange={(e)=>{
                setuserName(e.target.value)
            }} label={"Email"} placeholder={"johndoe@gmail.com"}></InputBox>
            <InputBox onChange={(e)=>{
                setpassword(e.target.value)
            }} label={"Password"} placeholder={"123456"}></InputBox>
            <div className="pt-4">
            <Button onClick={async()=>{
                const res=await axios.post("http://127.0.0.1:3000/api/v1/user/signup",{
                    username,
                    firstName,
                    lastName,
                    password
                })
                localStorage.setItem('token',response.data.token)

                navigate("/dashboard")
                
            }} label={"Sign up"}></Button>
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
            </div>
            </div>
        </div>
    )
}