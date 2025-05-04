import NavItem from "../shared/navItem";
import { motion, AnimatePresence } from "framer-motion";
import { MdLightMode } from "react-icons/md";
import SocialMediaIcons from "../shared/utilities/socialMediaIcons";
import useThemeStore from "../../store/store";
import { IoIosMoon } from "react-icons/io";

interface NavbarProps {
  toggleDarkMode: () => void;
  toggleMenu: () => void;
  isOpen: boolean;
}
export default function Navbar({
  toggleDarkMode,
  toggleMenu,
  isOpen,
}: NavbarProps) {

  const isDarkMode = useThemeStore(state=>(state.darkMode));


  return (
    <>
      <button
        className="fixed top-6 w-12 h-10 right-6 z-50
            flex flex-col justify-around p-2"
        onClick={toggleMenu}
      >
        <span
          className={`w-full h-1 bg-blue-500 origin-center rounded-full transform
      transition-all duration-500 ${
        isOpen ? "rotate-45 translate-y-[8px]" : ""
      }`}
        ></span>
        <span
          className={`w-full h-1 bg-blue-500 origin-center rounded-full transform
      transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-full h-1 bg-blue-500 origin-center rounded-full transform
      transition-all duration-500 ${
        isOpen ? "-rotate-45 -translate-y-[8px]" : ""
      }`}
        ></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            className="fixed top-0 right-0 w-screen h-screen overflow-hidden md:w-1/4 lg:w-1/5 dark:bg-gray-900/80 bg-gray-400/80   rounded-l-xl flex items-center flex-col justify-center gap-5 z-40"
          >
            <div className="flex flex-col items-center justify-center space-y-5 mb-8 lg:mb-16">
              {["About", "Education", "Experience", "Projects", "Contact"].map(
                (name, key) => (
                  <NavItem key={key} name={name} onClick={toggleMenu} />
                )
              )}
            </div>
            <SocialMediaIcons />
            <button
              className="fixed z-45 bottom-6 text-normal
        transition-all duration-300
        hover:text-blue-500
         hover:scale-125 "
              onClick={() => toggleDarkMode()}
            >
              {isDarkMode && <MdLightMode className="w-12 h-12"></MdLightMode>}
              {!isDarkMode && <IoIosMoon className="w-12 h-12"/>}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
