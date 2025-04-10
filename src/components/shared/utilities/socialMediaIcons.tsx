import { BiLogoFacebook, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import { profile } from "../../../utils/profile";

export default function SocialMediaIcons() {
  return (
    <div className="w-full items-center justify-center flex py-3 md:py-6 dark:text-white text-black gap-2 md:gap-4 lg:gap-6">
      <a href={profile.github}>
        <BiLogoGithub className="w-6 h-6 md:w-10 md:h-10 hover:scale-110 hover:cursor-pointer transition-all duration-300 hover:text-indigo-500"></BiLogoGithub>
      </a>
      <a href={profile.facebook}>
        <BiLogoFacebook className="w-6 h-6 md:w-10 md:h-10 hover:scale-110 hover:cursor-pointer transition-all duration-300 hover:text-blue-600"></BiLogoFacebook>
      </a>
      <a href={profile.instagram}>
        <BiLogoInstagram className="w-6 h-6 md:w-10 md:h-10 hover:scale-110 hover:cursor-pointer  hover:bg-gradient-to-br hover:from-purple-500 hover:to-orange-500 rounded-2xl transition-all duration-300"></BiLogoInstagram>
      </a>
    </div>
  );
}
