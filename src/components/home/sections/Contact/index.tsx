import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto flex flex-col items-center gap-16 my-24 px-4">
        <div className="w-full flex flex-row items-stretch gap-16">
          <ContactForm />
          <StaticImage
            src="../../../../images/jonny/jonny_dark_thinking.jpg"
            alt="Jonny leaning on a chair"
            className="w-full card-dark overflow-hidden object-top hidden lg:block"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
