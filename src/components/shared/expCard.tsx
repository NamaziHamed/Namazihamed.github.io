import AchievementsList from "./utilities/achievementsList";
import Paragraph from "./utilities/paragraph";
import SoftTitle from "./utilities/SoftTitle";
import Tag from "./utilities/tag";
import { easeOut, motion } from "framer-motion";

interface CardProps {
  key: number;
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function ExpCard({
  key,
  position,
  company,
  period,
  description,
  achievements,
  technologies,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.7 * key, ease: easeOut }}
      key={key}
      className="bg-gray-400/10 
        p-10 rounded-2xl flex flex-col gap-4"
    >
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >
        <SoftTitle>{position}</SoftTitle>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >

      <Paragraph className="text-sm">{period}</Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >

      <Paragraph className="font-semibold">{company}</Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >

      <Paragraph className="">{description}</Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >

      <ul className="flex flex-col gap-2">
        {achievements.map((achieved, ke) => (
          <AchievementsList key={ke}>{achieved}</AchievementsList>
        ))}
      </ul>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >

      <div className="flex gap-2 mx-auto mt-5 flex-wrap">
        {technologies.map((skill, k) => (
          <Tag key={k}>{skill}</Tag>
        ))}
      </div>
        </motion.div>
    </motion.div>
  );
}
