import { profile } from "../../utils/profile";
import Container from "../shared/utilities/container";
import Card from "../shared/eduCard";

export default function Education() {
  return (
    <Container id="Education">
      <div className="flex items-center flex-col gap-8 md:gap-5 mt-5 md:mt-10">
        {profile.education.map((edu, key) => (
          <Card
            key={key}
            degree={edu.degree}
            school={edu.school}
            period={edu.period}
            description={edu.description}
            subjects={edu.subjects}
          ></Card>
        ))}
      </div>
    </Container>
  );
}
