
import axios from "axios";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
export function SendMoney(){
    const [amount,setamount]=useState(0)
    const location = useLocation();
    const navigate=useNavigate()
    useEffect(()=>{
        const resme=axios.get("http://127.0.0.1:3000/api/v1/user/me",{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then((response)=>{
            // setfirstName(response.data.firstName.charAt(0).toUpperCase() + response.data.firstName.slice(1))
        }).catch((err)=>{
            navigate("/signin")
        })
    },[])
  // Parse the query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id')||null;
    const firstName = queryParams.get('firstName')|| null;
    return (
        <div className="h-screen bg-gray-100 flex justify-center">
            <div className="flex w-80 flex-col justify-center">
                <div className="bg-white text-center p-2 px-4 shadow-lg  ">
            <Heading label={"Send Money"}></Heading>
            <div className="flex pt-32">
                <div className="rounded-full text-white bg-green-400 w-12 h-12 flex justify-center p-2 ml-2">
                    <div className="text-2xl text-center">
                {firstName && firstName[0].toUpperCase()}
                    </div>
                </div>
                <div className="text-2xl font-semibold ml-2 p-2">
                {firstName && firstName.charAt(0).toUpperCase() + firstName.slice(1)}
                </div>
            </div>
            
            <InputBox onChange={(e)=>{
                setamount(e.target.value)
            }} label={"Amount (in Rs)"} placeholder={"Enter amount"}></InputBox>

            <div className="pt-4">
            <Button onClick={async()=>{
                const res=await axios.post("http://127.0.0.1:3000/api/v1/account/transfer",{
                    to:id,
                    amount:parseFloat(amount)
                },{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                })

            }} color={"bg-green-400"} hover={"hover:bg-green-500"}  label={"Initiate Transfer"}></Button>
            </div>
            </div>
            </div>
        </div>
    )
}