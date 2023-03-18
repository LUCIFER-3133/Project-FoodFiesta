import React from "react";

import ContactHendler from "../utils/contact.php";

const ContactContainer = () => {
  return (
    <section id="contact" className="p-16">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative md:ml-16 ml-8 mr-auto before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-indigo-400 to-indigo-600 transition-all ease-in-out duration-100">
          Contact
        </p>
      </div>
      <div className="w-screen md:p-16 p-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14194.770379667021!2d72.53958971639032!3d23.699344839591188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c4fe0be5bfbab%3A0xfc8dd1ffd166b43b!2sVisnagar%2C%20Gujarat%20384315!5e1!3m2!1sen!2sin!4v1679053581592!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-6">
        <div className="max-w-2xl md:m-auto m-8">
          <form
            action={ContactHendler}
            method="POST"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              className="p-2 "
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="p-2 "
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
              className="p-2 "
            ></textarea>

            <button
              className="cursor-pointer text-white bg-indigo-500 p-3 hover:bg-indigo-600"
              type="submit"
            >
              Send Meaasge
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
