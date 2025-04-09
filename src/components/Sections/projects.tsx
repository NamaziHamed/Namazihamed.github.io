import { profile } from "../../utils/profile";
import ProjectCard from "../shared/projectCard";

import Container from "../shared/utilities/container";

export default function Projects() {
  return (
    <Container id="Projects">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-4 mt-12 md:mt-20 overflow-hidden"
      >
        {profile.projects.map((project, key) => (
          <ProjectCard
            key={key}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            demoUrl={project.demoUrl}
            codeUrl={project.codeUrl}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <a
          href="#"
          className="font-semibold dark:text-white hover:bg-blue-900
        px-10 py-5 rounded-lg transition-all duration-300 
        hover:shadow-2xl shadow-blue-500/20 hover:scale-105 
        dark:bg-section bg-blue-100 border-blue-500 border-1 mt-5"
        >
          View More Projects
        </a>
      </div>
    </Container>
  );
}
