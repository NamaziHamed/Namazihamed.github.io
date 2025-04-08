interface titleProps{
    children: React.ReactNode
}

export default function Title ({children}:titleProps){
    return <h2 className="bg-gradient-to-r from-purple-500 to-blue-500
    bg-clip-text text-transparent w-fit font-bold">{children}</h2>
}