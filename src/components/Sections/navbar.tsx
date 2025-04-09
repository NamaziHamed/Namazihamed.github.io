import NavItem from "../shared/navItem";
import { profile } from "../../utils/profile";
import SVG from "../shared/utilities/svg";
import { GitHubIcon } from "../../utils/svgs";
import { InstagramIcon } from "../../utils/svgs";
import { FacebookIcon } from "../../utils/svgs";
import React, { useState } from "react";

interface NavbarProps {
  toggleDarkMode: () => void;
  toggleMenu?: () => void;
  isOpen: boolean;
}
export default function Navbar({
  toggleDarkMode,
  toggleMenu,
  isOpen,
}: NavbarProps) {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <>
      <button
        className="fixed top-6 w-12 h-10 right-6 z-50
            flex flex-col justify-around p-2"
        onClick={toggleMenu}
      >
        <span
          className={`w-full h-1 bg-blue-500 origin-center rounded-full transform
      transition-all duration-200 ${
        isOpen ? "rotate-45 translate-y-[8px]" : ""
      }`}
        ></span>
        <span
          className={`w-full h-1 bg-blue-500 origin-center rounded-full transform
      transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-full h-1 bg-blue-500 origin-center rounded-full transform
      transition-all duration-200 ${
        isOpen ? "-rotate-45 -translate-y-[8px]" : ""
      }`}
        ></span>
      </button>

      {/* Navbar Section */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-screen h-screen overflow-hidden 
        md:w-1/4 lg:w-1/5 bg-section rounded-l-xl flex items-center
         flex-col justify-center gap-5 z-40"
        >
          {["About", "Education", "Experience", "Projects", "Contact"].map(
            (name, key) => (
              <NavItem key={key} name={name} />
            )
          )}
          <div className="flex justify-center items-center py-6  gap-5">
            <SVG href={profile.github}>
              <GitHubIcon className="w-6 h-6 dark:text-white hover:text-blue-500" />
            </SVG>
            <SVG href={profile.facebook}>
              <FacebookIcon className="w-6 h-6 dark:text-white border-1 rounded hover:text-blue-500" />
            </SVG>
            <SVG href={profile.instagram}>
              <InstagramIcon className="w-6 h-6 dark:text-white hover:text-blue-500" />
            </SVG>
          </div>
          <button
            className="fixed z-45 bottom-6 text-normal
            transition-all duration-300
            hover:text-blue-500
             hover:scale-125 "
            onClick={toggleMode}
          >
            {isLightMode && "dark"}
            {!isLightMode && "light"}
          </button>
        </div>
      )}
    </>
  );
}
