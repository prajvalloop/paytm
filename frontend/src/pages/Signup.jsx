import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signup(){
    return (
        <div className="bg-gray-100 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="w-80 text-center p-2 px-4 bg-white max-h-full shadow-lg">
            <Heading label={"Sign up"}></Heading>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox label={"First Name"} placeholder={"John"} />
            <InputBox label={"Last Name"} placeholder={"Doe"}></InputBox>
            <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}></InputBox>
            <InputBox label={"Password"} placeholder={"123456"}></InputBox>
            <div className="pt-4">
            <Button label={"Sign up"}></Button>
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
            </div>
            </div>
        </div>
    )
}