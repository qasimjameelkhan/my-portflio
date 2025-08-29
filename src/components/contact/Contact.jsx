import "./contact.css";
import emailjs, { init } from '@emailjs/browser';
import { useRef, useState } from "react";
import {motion, stagger, useInView} from "motion/react";
import ContactSvg from "./ContactSvg";


const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const form = useRef();
    const ref = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID, 
        form.current,
     {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setError(true);
          setSuccess(false);
        },
      );
  };

  const isInView = useInView(ref, {margin: "-200px"});

    return(
        <div className="contact" ref={ref} onSubmit={sendEmail}>
            <div className="cSection">
                <motion.form 
                variants={listVariant} 
                animate={isInView ? "animate" : "initial"}
                ref={form}>
                    <motion.h1 variants={listVariant} className="cTitle">Let's keep In Touch</motion.h1>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Name</label>
                        <input type="text" name="user_name" placeholder="Qasim jameel"/>
                    </motion.div>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder="qk87783@gmail.com"/>
                    </motion.div>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Subject</label>
                        <input type="text" name="subject" placeholder="Subject"/> 
                    </motion.div>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Message</label>
                        <textarea rows={10} name="message" placeholder="Write your message here..."></textarea>
                    </motion.div>
                    <motion.button variants={listVariant} type="submit" className="formButton">Send</motion.button>
                    {success && <span>Message sent successfully!</span>}
                    {error && <span>Failed to send message.</span>}
                </motion.form>
            </div>
            <div className="cSection"><ContactSvg /></div>
        </div>
    )
}
export default Contact;
