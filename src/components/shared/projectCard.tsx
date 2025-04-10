import { ExternalLinkIcon, GitHubIcon } from "../../utils/svgs";
import Paragraph from "./utilities/paragraph";
import SoftTitle from "./utilities/SoftTitle";
import Tag from "./utilities/tag";
import {motion} from 'framer-motion'

interface projectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  thumbnail: string;
  key: number;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  codeUrl,
  thumbnail,
  key,
}: projectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 , delay: 0.5 * key }}
      key={key}
      className=" bg-gray-400/10
        p-10 rounded-2xl flex flex-col gap-4 justify-between"
    >
      <div className=" max-w-xl max-h-xl aspect-square relative overflow-hidden ">
        <img
          src={thumbnail}
          alt={`${title} project's thumbnail`}
          className="w-full h-full object-fit"
        />
      </div>
      <SoftTitle>{title}</SoftTitle>
      <Paragraph className="text-sm">{description}</Paragraph>
      <div className="flex gap-2 mx-auto mt-5 flex-wrap">
        {technologies.map((skill, k) => (
          <Tag key={k}>{skill}</Tag>
        ))}
      </div>
      <div className="flex gap-3 mt-5">
        <a
          href={demoUrl}
          className="bg-gradient-to-r from-purple-500 to-blue-500
    bg-clip-text text-transparent w-fit hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
        >
          Live Demo
          <ExternalLinkIcon className="h-10 w-10 text-blue-500 inline pl-2" />
        </a>
        <a
          href={codeUrl}
          className="bg-gradient-to-r from-purple-500 to-blue-500
    bg-clip-text text-transparent w-fit hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
        >
          Code
          <GitHubIcon className="h-10 w-10 text-blue-500 inline pl-2" />
        </a>
      </div>
    </motion.div>
  );
}
