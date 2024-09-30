export function AppBar({firstName}){
    return (
        <div className="flex justify-between shadow-lg h-14">
            <div className="text-xl font-base ml-3 p-1">
            {"PayTM App"}
            </div>
            <div className="flex">
                <div className="text-xl font-base p-1 mr-3">
            {firstName}
                </div>
                <div className="rounded-full text-white bg-slate-300 w-8 h-8 flex justify-center p-0.5">
                <div className="text-xl text-center">
                {firstName[0]}
                </div>
                </div>
            
                
            </div>
        </div>
    )
}