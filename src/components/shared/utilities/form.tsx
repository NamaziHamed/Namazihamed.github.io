export default function ContactForm() {
  return (
    <form className="grid grid-cols-1 gap-3">
      <label className="text-normal" htmlFor="input-name">Name: </label>
      <input className="text-normal" type="text" name="input-name" id="input-name" />

      <label className="text-normal" htmlFor="input-email">Email: </label>
      <input className="text-normal" type="email" name="input-email" id="input-email" />

      <label className="text-normal" htmlFor="input-subject">Subject</label>
      <input className="text-normal" type="emails" name="input-subject" id="input-subject" />

      <label className="text-normal" htmlFor="input-textarea">Message</label>
      <textarea className="text-normal" rows={10} name="input-textarea" id="input-textarea"></textarea>

      <a
          href="#"
          className="font-semibold dark:text-white hover:bg-blue-200
        px-10 py-5 rounded-lg transition-all duration-300 text-center
        hover:shadow-2xl shadow-blue-500/20 hover:scale-105 
        dark:bg-section bg-blue-100 border-blue-500 border-1 mt-5"
        >
          Submit
        </a>
    </form>
  );
}
