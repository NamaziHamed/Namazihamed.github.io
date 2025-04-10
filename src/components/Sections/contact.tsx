import { profile } from "../../utils/profile";
import Container from "../shared/utilities/container";
import ContactForm from "../shared/utilities/form";
import Paragraph from "../shared/utilities/paragraph";
import SoftTitle from "../shared/utilities/SoftTitle";
import { easeInOut, motion } from "framer-motion";

export default function Contact() {
  return (
    <Container id="Contact" className="bg-gray-400/10 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay:0.3, ease: easeInOut }}
          className="grid grid-cols-1 gap-2 items-center justify-around pr-10"
        >
          <p className="text-lg mb-3 text-normal">
            Have a project in mind or want to chat? Feel free to reach out. I'm
            always open to discussing new opportunities and ideas.
          </p>
          <SoftTitle>Email: </SoftTitle>
          <Paragraph className="pl-3">{profile.email}</Paragraph>
          <SoftTitle>WhatsApp: </SoftTitle>
          <Paragraph className="pl-3">{profile.mobile}</Paragraph>
          <SoftTitle>Facebook</SoftTitle>
          <Paragraph className="pl-3">{profile.facebook}</Paragraph>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </Container>
  );
}
