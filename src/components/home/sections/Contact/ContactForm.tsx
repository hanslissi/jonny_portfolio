import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Input from "../../../common/Input";
import TextArea from "../../../common/TextArea";
import ReCAPTCHA from "react-google-recaptcha";
import { AnimatePresence, Variants, motion } from "framer-motion";
import FormInfoMessage from "../../../common/FormInfoMessage";
import Modal from "../../../common/Modal";
import { DURATION_MEDIUM } from "../../../../constants/animationConstants";
import clsx from "clsx";
import LogoLinkCard from "../../../common/LogoLinkCard";
import imgLinkedin from "../../../../images/logos/linkedin.png";
import imgInstagram from "../../../../images/logos/instagram.png";
import imgEmail from "../../../../images/logos/email.png";
import { StaticImage } from "gatsby-plugin-image";

const emailServiceId = process.env.GATSBY_EMAILJS_SERVICE_ID || ""; // Ensure process.env.GATSBY_EMAILJS_SERVICE_ID is defined
const emailTemplateId = process.env.GATSBY_EMAILJS_CONTACT_TEMPLATE_ID || ""; // Ensure process.env.GATSBY_EMAILJS_CONTACT_TEMPLATE_ID is defined
const emailjsPublicKey = process.env.GATSBY_EMAILJS_PUBLIC_KEY || ""; // Ensure process.env.GATSBY_EMAILJS_PUBLIC_KEY is defined
const recaptchaSiteKey = process.env.GATSBY_RECAPTCHA_SITE_KEY || "";

const imgLinkedInPath = "../../../../images/logos/linkedin.png";
const imgInstagramPath = "../../../../images/logos/instagram.png";
const imgEmailPath = "../../../../images/logos/email.png";

interface ContactFormData {
  fromName: string;
  fromContactInfo: string;
  message: string;
}

const inputValidation = {
  required: {
    value: true,
    message: "Required",
  },
};

const submitButtonVariants: Variants = {
  idle: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: DURATION_MEDIUM,
    },
  },
  tapped: {
    scale: 0.95,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: DURATION_MEDIUM,
    },
  },
};

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const methods = useForm<ContactFormData>();

  const sendEmail = (data: ContactFormData, reCaptchaToken: string) => {
    const templateParams = {
      from_name: data.fromName,
      from_contact_info: data.fromContactInfo,
      message: data.message,
      "g-recaptcha-response": reCaptchaToken,
    };

    setLoading(true);

    emailjs
      .send(emailServiceId, emailTemplateId, templateParams, {
        publicKey: emailjsPublicKey,
      })
      .then(
        (response) => {
          setLoading(false);
          methods.reset({
            fromName: "",
            fromContactInfo: "",
            message: "",
          });
          setEmailStatus("success");
        },
        (err) => {
          setLoading(false);
          setEmailStatus("error");
        }
      );
  };

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setShowRecaptcha(false);
      sendEmail(methods.getValues(), value);
    }
  };

  const handleClickButton = () => {
    setEmailStatus("idle");
    methods.handleSubmit(() => {
      // form is valid
      setShowRecaptcha(true);
    })();
  };

  const getInfoMessage = () => {
    switch (emailStatus) {
      case "success":
        return "Message sent successfully";
      case "error":
        return "Something didn't work on our end... Try again later. If the problem persists, please contact me directly.";
      default:
        return "";
    }
  };

  return (
    <div className={clsx("relative w-full", className)}>
      <FormProvider {...methods}>
        <form
          className="flex flex-col"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <h2>Send a Message</h2>
          <div className="w-full flex flex-col gap-2">
            <Input
              name="fromName"
              id="fromName"
              type="text"
              placeholder="Your name"
              validation={inputValidation}
            />
            <Input
              name="fromContactInfo"
              id="fromContactInfo"
              type="text"
              placeholder="E-Mail or Phone Number"
              validation={inputValidation}
            />
            <TextArea
              name="message"
              id="message"
              type="text"
              placeholder="Message"
              validation={inputValidation}
            />
            <div className="relative w-full md:p-0 mt-8">
              <motion.button
                className="relative w-full p-2 bg-primary border-[0.5px] rounded-full focus-ring-primary"
                disabled={loading}
                onClick={handleClickButton}
                variants={submitButtonVariants}
                animate="idle"
                whileTap="tapped"
              >
                Send Message
              </motion.button>
              <div className="flex flex-col items-center mt-4 min-h-8">
                <AnimatePresence initial={false} mode="wait">
                  {emailStatus !== "idle" && (
                    <FormInfoMessage
                      message={getInfoMessage()}
                      type={emailStatus === "success" ? "success" : "error"}
                    />
                  )}
                </AnimatePresence>
              </div>
              <Modal
                open={showRecaptcha}
                onClose={() => setShowRecaptcha(false)}
              >
                <div className="flex flex-col items-center gap-4">
                  Please solve the reCAPTCHA to send your message
                  <ReCAPTCHA
                    className="inline-block"
                    sitekey={recaptchaSiteKey}
                    onChange={handleRecaptchaChange}
                  />
                  <button
                    className="underline"
                    onClick={() => setShowRecaptcha(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Modal>
            </div>
          </div>

          <div className="w-full flex flex-row items-center gap-4">
            <hr className="h-px w-full bg-whiteHighlight border-0"></hr>
            <p className="text-nowrap">or contact me on my socials</p>
            <hr className="h-px w-full bg-whiteHighlight border-0"></hr>
          </div>
          <div className="w-full flex flex-row justify-center gap-4 mt-12">
            <LogoLinkCard
              img={(props) => (
                <StaticImage
                  className={props.className}
                  alt={props.alt}
                  src={imgLinkedInPath}
                />
              )}
              imgSrc={imgLinkedin}
              title="LinkedIn"
              href="https://www.linkedin.com"
              glass
            />
            <LogoLinkCard
              img={(props) => (
                <StaticImage
                  className={props.className}
                  alt={props.alt}
                  src={imgInstagramPath}
                />
              )}
              imgSrc={imgInstagram}
              title="Instagram"
              href="https://www.instagram.com"
              glass
            />
            <LogoLinkCard
              img={(props) => (
                <StaticImage
                  className={props.className}
                  alt={props.alt}
                  src={imgEmailPath}
                />
              )}
              imgSrc={imgEmail}
              title="E-Mail"
              href="mailto:riedmueller.jo@gmail.com"
              glass
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
