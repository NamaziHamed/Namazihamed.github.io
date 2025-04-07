interface ButtonProps{
    text:string;
    className?: string;
    func?:()=>void;
}
export default function Button({text, className, func}:ButtonProps){
    return <button onClick={func} className={`font-semibold
        px-10 py-5 rounded-lg transition-all duration-300 
        hover:shadow-2xl shadow-blue-500/20 hover:scale-105 ${className}`}>{text}</button>
}