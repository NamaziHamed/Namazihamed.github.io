import { profile } from "../../utils/profile";
import Container from "../shared/utilities/container";
import ContactForm from "../shared/utilities/form";
import Paragraph from "../shared/utilities/paragraph";
import SoftTitle from "../shared/utilities/SoftTitle";

export default function Contact() {
  return (
    <Container id="Contact" className="bg-gray-400/10 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-12 md:mb-16">
        <div className="grid grid-cols-1 gap-2 mb-8 md:mb-0">
          <p className="text-lg mb-8 text-normal">
            Have a project in mind or want to chat? Feel free to reach out. I'm
            always open to discussing new opportunities and ideas.
          </p>
          <SoftTitle>Email: </SoftTitle>
          <Paragraph className="pl-3 lg:pl-6">{profile.email}</Paragraph>
          <SoftTitle>Mobile: </SoftTitle>
          <Paragraph className="pl-3 lg:pl-6">{profile.mobile}</Paragraph>
          <SoftTitle>Facebook</SoftTitle>
          <Paragraph className="pl-3 lg:pl-6">{profile.facebook}</Paragraph>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
