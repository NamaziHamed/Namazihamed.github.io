import Paragraph from "./paragraph";

interface AchievementsProps{
    children : React.ReactNode;
    key: number;
}

export default function AchievementsList ({children , key}:AchievementsProps){

    return <li key={key} className="list-disc dark:marker:text-white"><Paragraph className="text-sm">{children}</Paragraph></li>
}