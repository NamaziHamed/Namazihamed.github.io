import Button from "../shared/button";

export default function Hero() {
  return (
    <section
      className="max-w-xl h-screen
      p-2 sm:p-4 flex flex-col justify-center gap-5"
    >
      <p className="text-normal">HELLO, I'M</p>
      <h1 className="color-primary underline">Hamed Namazi</h1>
      <h3 className="text-normal">Creative and Innovative Web Developer</h3>
      <p className="text-normal pr-10">
        Creative and dynamic web developer with strong foundations in full-stack
        development. Skilled in creating visually compelling and highly
        functional web applications using HTML, CSS, JavaScript, React.js,
        Angular, and Node.js.
      </p>

      <div className="flex justify-around max-w-sm">
        <Button
          text="Get In Touch"
          className="bg-primary text-overlay"
        />
        <Button
          text="View My Work"
          className="bg-body color-primary border-blue-600 border-2"
        />
      </div>
    </section>
  );
}
