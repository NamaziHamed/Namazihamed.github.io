import Paragraph from "./utilities/paragraph";
import SoftTitle from "./utilities/SoftTitle";
import Tag from "./utilities/tag";
import { motion } from "framer-motion";

interface CardProps {
  key: number;
  degree: string;
  school: string;
  period: string;
  description: string;
  subjects: string[];
}

export default function EduCard({
  key,
  degree,
  school,
  period,
  description,
  subjects,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 * key }}
      key={key}
      className=" bg-gray-400/10
        p-10 rounded-2xl flex flex-col gap-4"
    >
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >
        <SoftTitle>{degree}</SoftTitle>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >
        <Paragraph className="text-sm ">{period}</Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >
        <Paragraph className="font-semibold">{school}</Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 * key }}
      >
        <Paragraph className="text-sm ">{description}</Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 * key }}
        className="flex gap-2 mx-auto mt-5 flex-wrap"
      >
        {subjects.map((skill, k) => (
          <Tag key={k}>{skill}</Tag>
        ))}
      </motion.div>
    </motion.div>
  );
}
