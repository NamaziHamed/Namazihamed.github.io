
import ExpCard from "../shared/expCard";
import Container from "../shared/utilities/container";
import { profile } from "../../utils/profile";

export default function Experience() {
  return (
    <Container id="Experience">
      <ul className="grid items-center frid-cols-1 gap-10 mt-20">
        {profile.experience.map((exp, key) => (
          <ExpCard
            key={key}
            position={exp.position}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            achievements={exp.achievements}
            technologies={exp.technologies}
          ></ExpCard>
        ))}
      </ul>
    </Container>
  );
}
