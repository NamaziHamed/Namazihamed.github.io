import Button from "../shared/utilities/button";
import { easeInOut, motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen px-6 md:px-12 lg:px-24 flex flex-col justify-center gap-8
      sm:gap-10
      "
    >
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl"
      >
        Hello, I'm
      </motion.p>
      <motion.h1
        initial={{ scale: 1.5, x: 200 }}
        whileInView={{ scale: 1, x: 0 }}
        transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-500 to-blue-500 border
       w-fit bg-clip-text text-transparent
      p-1 rounded-2xl title-shine hover:scale-105 transition duration-300 font-roboto"
      >
        Hamed Namazi
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center gap-8
      sm:gap-10"
      >
        <h2 className="text-normal font-semibold">
          Creative and Innovative Web Developer
        </h2>
        <p className="text-normal pr-10 max-w-3xl">
          Creative and dynamic web developer with strong foundations in
          full-stack development. Skilled in creating visually compelling and
          highly functional web applications using HTML, CSS, JavaScript,
          React.js, Angular, and Node.js.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-around max-w-sm"
      >
        <Button
          href="#contact"
          text="Get In Touch"
          className="bg-gradient-to-r from-purple-500 to-blue-500 
        hover:from-purple-600 hover:to-blue-600 text-white"
        />
        <Button
          href="#projects"
          text="View My Work"
          className="dark:text-white dark:bg-section text-normal bg-blue-100/50 border
          border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900
          "
        />
      </motion.div>
    </section>
  );
}
