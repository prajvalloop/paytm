import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin(){
    return (
        <div className="bg-gray-100 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="w-80 text-center p-2 px-4 bg-white max-h-full shadow-lg">
            <Heading label={"Sign In"}></Heading>
            <SubHeading label={"Enter your credentials to access your account"}/>
            
            <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}></InputBox>
            <InputBox label={"Password"} placeholder={""}></InputBox>
            <div className="pt-4">
            <Button label={"Sign In"}></Button>
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}></BottomWarning>
            </div>
            </div>
        </div>
    )
}