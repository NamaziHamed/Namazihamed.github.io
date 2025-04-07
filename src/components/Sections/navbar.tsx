interface NavbarProps {
    toggleDarkMode : ()=>void ;
}
export default function Navbar ({toggleDarkMode} : NavbarProps){
    return (
        <nav className="absolute top-2 right-2 rounded-full
         ">
            <button onClick={toggleDarkMode} >Dar/light</button>
        </nav>
    )
}