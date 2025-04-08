import AchievementsList from "./utilities/achievementsList";
import Paragraph from "./utilities/paragraph";
import SoftTitle from "./utilities/SoftTitle";
import Tag from "./utilities/tag";

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
    <div
      key={key}
      className="dark:bg-gray-900 bg-gray-400/10
        p-10 rounded-2xl m-6 md:m-10 lg:m-16 flex flex-col gap-4"
    >
      <SoftTitle>{position}</SoftTitle>
      <Paragraph className="text-sm">{period}</Paragraph>
      <Paragraph className="font-semibold">{company}</Paragraph>
      <Paragraph className="">{description}</Paragraph>
      <ul className="flex flex-col gap-2">
        {achievements.map((achieved, ke) => (
          <AchievementsList key={ke}>{achieved}</AchievementsList>
        ))}
      </ul>
      <div className="flex gap-2 mx-auto mt-5 flex-wrap">
        {technologies.map((skill, k) => (
          <Tag key={k}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
}
