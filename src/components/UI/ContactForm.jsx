import React, { useState } from 'react'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/98a14560-d8cb-11ed-b656-837b57be60e0";

const ContactForm = () => {
const [submitted, setSubmitted] = useState(false)
const handleSubmit = () => {
  setTimeout(() => {
    setSubmitted(true);
  }, 100);
};


if (submitted) {
    return (
      <div className="w-full mt-10 md:mt-0 md:w-full sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 text-[23px]">
        <h1>Thanks!
          <br />
           We'll be in touch soon.</h1>
      </div>
    );
  }

  return (
    <form className="w-full"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method='POST'
        target='_blank'
    >
    <div className="mb-5">
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        required
        className="w-full p-3 focus:outline-none rounded-[5px]"
      />
    </div>
    <div className="mb-5">
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        required
        className="w-full p-3 focus:outline-none rounded-[5px]"
      />
    </div>
    <div className="mb-5">
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        required
        className="w-full p-3 focus:outline-none rounded-[5px]"
      />
    </div>

    <div className="mb-5">
      <textarea
        type="text"
        rows={3}
        placeholder="Write your message"
        name="message"
        required
        className="w-full p-3 focus:outline-none rounded-[5px]"
      />
    </div>

    <button
    type="submit"
    className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
      Send Message
    </button>
  </form>
  )
}

export default ContactForm
