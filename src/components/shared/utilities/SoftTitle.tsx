interface SoftTitleProps{
    children: React.ReactNode
}

export default function SoftTitle ({children}:SoftTitleProps){
    return <h3 className="bg-gradient-to-r from-purple-500 to-blue-500
    bg-clip-text text-transparent w-fit font-semibold
    text-lg sm:text-xl md:text-2xl lg:text-3xl
    ">{children}</h3>
}