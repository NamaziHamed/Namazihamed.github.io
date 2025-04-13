
import ExpCard from "../shared/expCard";
import Container from "../shared/utilities/container";
import { profile } from "../../utils/profile";
import { easeInOut, motion} from 'framer-motion'

export default function Experience() {
  return (
    <Container id="Experience" className="dark:bg-gray-900
    bg-gray-400/10">
      <motion.div
      initial={{opacity:0,x:200}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      transition={{duration:0.8,delay:0.2,ease:easeInOut}}
       className="grid items-center frid-cols-1 gap-8 md:gap-5 mt-5 md:mt-10">
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
      </motion.div>
    </Container>
  );
}
