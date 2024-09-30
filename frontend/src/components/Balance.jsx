export function Balance({value}){
    return (
        <div className="flex ">
            <div className="font-bold text-lg p-3">
                {"Your Balance"}
            </div>
            <div className="font-semibold text-lg p-3">
            {`Rs ${value}`}
            </div>
        </div>
    )
}