import portfolioImg from "./../../assets/ggg.jpg";
import { profile } from "../../utils/profile";
import Container from "../shared/utilities/container";
import Paragraph from "../shared/utilities/paragraph";
import Tag from "../shared/utilities/tag";
import SoftTitle from "../shared/utilities/SoftTitle";
import { motion } from "framer-motion";
import SocialMediaIcons from "../shared/utilities/socialMediaIcons";

export default function About() {
  return (
    <Container id="About" className="dark:bg-gray-900 bg-gray-400/10">
      <div
        className="flex flex-col md:flex-row justify-between lg:items-center
      "
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col w-full h-full"
        >
          <div
            className="px-20 sm:px-30 md:px-0 py-12 lg:py-20 rounded-xl
          object-fit w-full h-full lg:max-w-xl
        "
          >
            <img src={portfolioImg} alt="Personal Image" className="rounded-full"/>
          </div>

          <SocialMediaIcons></SocialMediaIcons>
        </motion.div>

        <div className="px-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <Paragraph className="lg:text-2xl">
              I'm a passionate full-stack developer with over 5 years of
              experience building web applications that deliver exceptional user
              experiences. My journey in tech began with a curiosity about how
              things work, which quickly evolved into a love for creating
              digital solutions.
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <Paragraph className="lg:text-2xl">
              Beyond coding, I'm passionate about exploring cutting-edge web
              technologies, particularly in the realm of front-end performance
              and accessibility. I enjoy experimenting with new CSS layout
              techniques and building performant React applications. To
              recharge, I enjoy hiking and exploring nature
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col my-4 md:flex-row md:m-8  justify-between gap-6 md:gap-12"
          >
            <SoftTitle>Skills</SoftTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.skills.map((skill, key) => (
                <Tag key={key}>{skill}</Tag>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col my-4 md:flex-row md:m-8  justify-between gap-6 md:gap-12"
          >
            <SoftTitle>Interests</SoftTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.interests.map((interest, key) => (
                <Tag key={key}>{interest}</Tag>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
