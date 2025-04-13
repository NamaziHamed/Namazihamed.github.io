import { ChangeEvent, useState, MouseEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const SERVICE_ID = "service_erlv1zr";
  const TEMPLATE_ID = "template_f1smdgw";
  const PUBLIC_KEY = "XLKZmhGpQFvyLTC0-";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (form.current){
      emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert("message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Error sending message. please try again.");
      });
    }
  };

  return (
    <form className="grid grid-cols-1 gap-3" ref={form}>
      <label className="text-normal" htmlFor="input-name">
        Name:
      </label>
      <input
        value={formData.name}
        onChange={handleChange}
        className="text-normal"
        type="text"
        name="name"
        id="input-name"
      />

      <label className="text-normal" htmlFor="input-email">
        Email:
      </label>
      <input
        value={formData.email}
        onChange={handleChange}
        className="text-normal"
        type="email"
        name="email"
        id="input-email"
      />

      <label className="text-normal" htmlFor="input-subject">
        Subject
      </label>
      <input
        value={formData.subject}
        onChange={handleChange}
        className="text-normal"
        type="emails"
        name="subject"
        id="input-subject"
      />

      <label className="text-normal" htmlFor="input-textarea">
        Message
      </label>
      <textarea
        value={formData.message}
        onChange={handleChange}
        className="text-normal"
        rows={10}
        name="message"
        id="input-textarea"
      ></textarea>

      <button
        type="submit"
        onClick={handleSubmit}
        className="font-semibold dark:text-white hover:bg-blue-600
        px-10 py-5 rounded-lg transition-all duration-300 text-center
        hover:shadow-2xl shadow-blue-500/20 hover:scale-105 
        dark:bg-section bg-blue-100 border-blue-500 border-1 mt-5"
      >
        Submit
      </button>
    </form>
  );
}
