import Paragraph from "./utilities/paragraph";
import SoftTitle from "./utilities/SoftTitle";
import Tag from "./utilities/tag";

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
    <div
      key={key}
      className=" bg-gray-400/10
        p-10 rounded-2xl flex flex-col gap-4"
    >
      <SoftTitle>{degree}</SoftTitle>
      <Paragraph className="text-sm ">{period}</Paragraph>
      <Paragraph className="font-semibold">{school}</Paragraph>
      <Paragraph className="text-sm ">{description}</Paragraph>
      <div className="flex gap-2 mx-auto mt-5 flex-wrap">
        {subjects.map((skill, k) => (
          <Tag key={k}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
}
