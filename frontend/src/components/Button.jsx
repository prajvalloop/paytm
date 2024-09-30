export function Button({label,onClick,color="bg-gray-800",hover="hover:bg-gray-900"}){
    return (
        <button type="button" onClick={onClick} className={`w-full text-white ${color} ${hover} focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>{label}</button>
    )
}