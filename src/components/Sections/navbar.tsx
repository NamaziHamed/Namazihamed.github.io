interface NavbarProps {
    toggleDarkMode : ()=>void ;
}
export default function Navbar ({toggleDarkMode} : NavbarProps){
    return (
        <nav className="fixed top-2 right-2 rounded-full z-50
         ">
            <button onClick={toggleDarkMode} className="text-normal">Dar/light</button>
        </nav>
    )
}