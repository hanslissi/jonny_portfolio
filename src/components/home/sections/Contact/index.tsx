import React from "react";
import SectionWrapper from "../../../wrappers/SectionWrapper";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="container mx-auto flex flex-col items-center gap-16 py-16">
        <h1>Contact</h1>
        <div className="w-full flex flex-row items-center gap-16">
          <ContactForm />
          <StaticImage
            src="../../../../images/jonny/jonny_chair.png"
            alt="Jonny leaning on a chair"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
