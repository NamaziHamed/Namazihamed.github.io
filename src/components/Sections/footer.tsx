import { profile } from "../../utils/profile";
import { FacebookIcon, GitHubIcon, InstagramIcon } from "../../utils/svgs";
import Paragraph from "../shared/utilities/paragraph";
import SVG from "../shared/utilities/svg";
import Rocket from "../../assets/rocket_1159293.png";

export default function Footer() {
    const handleBeam = () => {
        const duration = 1000; // Duration in milliseconds (adjust as needed)
        const start = window.scrollY;
        const startTime = performance.now();
      
        const scroll = (currentTime:any) => {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
      
          window.scrollTo(0, start + (0 - start) * progress); // Linear easing
      
          if (timeElapsed < duration) {
            requestAnimationFrame(scroll);
          }
        };
      
        requestAnimationFrame(scroll);
      };

  return (
    <footer className="bg-body">
      <div className="flex justify-center items-center py-6  gap-5">
        <SVG href={profile.github}>
          <GitHubIcon className="w-12 h-12 dark:text-white" />
        </SVG>
        <SVG href={profile.facebook}>
          <FacebookIcon className="w-12 h-12 dark:text-white border-1 rounded" />
        </SVG>
        <SVG href={profile.instagram}>
          <InstagramIcon className="w-12 h-12 dark:text-white" />
        </SVG>
      </div>
      <Paragraph className="text-center color-normal">
        &reg; 2025 Hamed Namazi. All rights reserved. Site content may not be
        reproduced without express permission.
      </Paragraph>
      <div className="flex items-center justify-center py-5">
        <button className="text-sm" title="Beam me UP!!!" onClick={handleBeam}>
          <img
            src={Rocket}
            alt="rocket img"
            className="w-10 h-10 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
          />
        </button>
      </div>
    </footer>
  );
}
