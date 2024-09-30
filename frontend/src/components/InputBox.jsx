export function InputBox({label,placeholder,text_size="text-sm",font="font-medium",onChange}){
    return (
        <div >
            <div className={`${text_size} ${font} text-left py-2 `}>
            {label}
            </div>
            <input onChange={onChange} className="border rounded w-full px-2 py-1 border-slate-200" type="text" placeholder={placeholder}></input>
        </div>
    )
}