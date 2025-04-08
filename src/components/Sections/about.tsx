import Container from "../shared/container";
import { FacebookIcon, GitHubIcon, InstagramIcon } from "../../utils/cvgs";
import Paragraph from "../shared/paragraph";
import SVG from "../shared/svg";
import { profile } from "../../utils/profile";
import portfolioImg from "./../../assets/brand-logo.png";
import Tag from "../shared/tag";

export default function About() {
  return (
    <Container id="About" className="dark:bg-gray-900 bg-gray-400/10">
      <div
        className="flex flex-col md:flex-row justify-between items-center
      "
      >
        <div className="flex flex-col w-full h-full">
          <div
            className="mx-auto py-12 lg:py-20 rounded-xl
          object-fit w-full h-full lg:max-w-xl
        "
          >
            <img src={portfolioImg} alt="Personal Image" />
          </div>

          <div className="flex justify-center gap-4 py-3 md:py-6 lg:py-10">
            <SVG href={profile.instagram}>
              <InstagramIcon className="h-10 w-10" />
            </SVG>
            <SVG href={profile.github}>
              <GitHubIcon className="h-10 w-10" />
            </SVG>
            <SVG href={profile.facebook}>
              <FacebookIcon className="h-10 w-10 border-1 rounded-lg" />
            </SVG>
          </div>
        </div>

        <div className="px-10">
          <div className="flex flex-col gap-5">
            <Paragraph className="lg:text-2xl">
              I'm a passionate full-stack developer with over 5 years of
              experience building web applications that deliver exceptional user
              experiences. My journey in tech began with a curiosity about how
              things work, which quickly evolved into a love for creating
              digital solutions.
            </Paragraph>
            <Paragraph className="lg:text-2xl">
              Beyond coding, I'm passionate about exploring cutting-edge web
              technologies, particularly in the realm of front-end performance
              and accessibility. I enjoy experimenting with new CSS layout
              techniques and building performant React applications. To
              recharge, I enjoy hiking and exploring nature
            </Paragraph>
          </div>

          <div className="flex flex-col my-4 md:flex-row md:my-8 justify-between gap-6 md:gap-0">
            <div>
              <h4
                className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500
              w-fit bg-clip-text font-semibold text-xl md:text-2xl lg:text-3xl"
              >
                Skills
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.skills.map((skill, key) => (
                  <Tag key={key}>{skill}</Tag>
                ))}
              </div>
            </div>
            <div>
              <h4
                className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500
              w-fit bg-clip-text font-semibold text-xl md:text-2xl lg:text-3xl"
              >
                Interests
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.interests.map((interest, key) => (
                  <Tag key={key}>{interest}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
