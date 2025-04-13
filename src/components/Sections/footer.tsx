import Paragraph from "../shared/utilities/paragraph";
import SocialMediaIcons from "../shared/utilities/socialMediaIcons";
import { BsRocketFill } from "react-icons/bs";

export default function Footer() {
  const handleBeam = () => {
    const duration = 1000; // Duration in milliseconds (adjust as needed)
    const start = window.scrollY;
    const startTime = performance.now();

    const scroll = (currentTime: any) => {
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
      <SocialMediaIcons />
      <Paragraph className="text-center color-normal">
        &reg; 2025 Hamed Namazi. All rights reserved. Site content may not be
        reproduced without express permission.
      </Paragraph>
      <div className="flex items-center justify-center py-5">
        <button className="text-sm" title="Beam me UP!!!" onClick={handleBeam}>
          <BsRocketFill
            className="w-8 h-8 hover:scale-110 hover:-translate-y-1 
            transition-all duration-300  hover:text-blue-600
           "
          />
        </button>
      </div>
    </footer>
  );
}
