import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425167.4778919063!2d-118.0605781090279!3d33.64106975696071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc925c54d5f7cf%3A0xdea6c3618ff0d607!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1681222462033!5m2!1sen!2sus"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
