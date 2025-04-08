interface ButtonProps{
    text:string;
    className?: string;
    href:string;
}
export default function Button({text, className, href}:ButtonProps){
    return <a href={href} className={`font-semibold
        px-10 py-5 rounded-lg transition-all duration-300 
        hover:shadow-2xl shadow-blue-500/20 hover:scale-105 
        ${className}`}>{text}</a>
}