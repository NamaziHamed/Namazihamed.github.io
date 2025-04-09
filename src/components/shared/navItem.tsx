interface NavItemProps{
    name:string;
    key:number;
}

export default function NavItem ({name,key}:NavItemProps){
    return (<a href={`#${name.toLowerCase()}`} key={key} className="text-normal
    font-semibold text-xl lg:text-3xl
     hover:text-blue-500 transition duration-300 hover:scale-110 hover:-translate-y-1">{name}</a>)
}