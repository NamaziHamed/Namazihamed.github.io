import Container from "../shared/container";
import { FacebookIcon, GitHubIcon, InstagramIcon } from "../shared/cvgs";
import Paragraph from "../shared/paragraph";
import Title from "../shared/title";

export default function About() {
  return (
    <Container id="about" className="bg-box">
      <Title>About Me</Title>
      <div>
        <img src="" alt="Personal Image" className="" />
        <div>
          <InstagramIcon />
          <GitHubIcon />
          <FacebookIcon />
        </div>

        <div>
          <Paragraph>
            I'm a passionate full-stack developer with over 5 years of
            experience building web applications that deliver exceptional user
            experiences. My journey in tech began with a curiosity about how
            things work, which quickly evolved into a love for creating digital
            solutions.
          </Paragraph>
          <Paragraph>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or hiking in the great
            outdoors. I believe in continuous learning and pushing the
            boundaries of what's possible in web development.
          </Paragraph>
        </div>

        <div>
          <div>
            <h4>Skills</h4>
          </div>
          <div>
            <h4>Interests</h4>
          </div>
        </div>
      </div>
    </Container>
  );
}
