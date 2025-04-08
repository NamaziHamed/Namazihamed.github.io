import { profile } from "../../utils/profile";
import Container from "../shared/utilities/container";
import Card from "../shared/eduCard";

export default function Education() {
  return (
    <Container id="Education">
      <div className="flex items-center flex-col gap-10 mt-20">
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
