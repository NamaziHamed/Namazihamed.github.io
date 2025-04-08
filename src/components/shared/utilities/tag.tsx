interface TagProps {
  key:number;
  children: React.ReactNode;
}

export default function Tag({key, children }: TagProps) {
  return (
    <span key={key} className="bg-section text-white dark:text-normal w-fit py-2 px-4
    text-xs rounded-3xl">{children}</span>
  );
}
