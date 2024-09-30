import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";

export function SendMoney(){
    return (
        <div className="h-screen bg-gray-100 flex justify-center">
            <div className="flex w-80 flex-col justify-center">
                <div className="bg-white text-center p-2 px-4 shadow-lg  ">
            <Heading label={"Send Money"}></Heading>
            <div className="flex pt-32">
                <div className="rounded-full text-white bg-green-400 w-12 h-12 flex justify-center p-2 ml-2">
                    <div className="text-2xl text-center">
                {"A"}
                    </div>
                </div>
                <div className="text-2xl font-semibold ml-2 p-2">
                {"Friend's Name"}
                </div>
            </div>
            
            <InputBox label={"Amount (in Rs)"} placeholder={"Enter amount"}></InputBox>

            <div className="pt-4">
            <Button color={"bg-green-400"} hover={"hover:bg-green-500"}  label={"Initiate Transfer"}></Button>
            </div>
            </div>
            </div>
        </div>
    )
}