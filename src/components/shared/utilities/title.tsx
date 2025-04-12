import { motion } from "framer-motion";

interface titleProps {
  children: React.ReactNode;
}

export default function Title({ children }: titleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 150 }}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      transition={{duration:0.5}}
      className="bg-gradient-to-r from-purple-500 to-blue-500
    bg-clip-text text-transparent w-fit font-bold"
    >
      {children}
    </motion.h2>
  );
}
