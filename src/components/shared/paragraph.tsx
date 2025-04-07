interface ParagraphProps{
    children: React.ReactNode;
    className?: string;
}

export default function Paragraph({children , className}:ParagraphProps){
    return (<p className={`text-normal ${className}`}>
        {children}
    </p>)
}