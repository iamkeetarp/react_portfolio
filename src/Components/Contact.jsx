import { useState } from "react";
import messages from "../Messages/common_msgs";
import { css } from "../Messages/common_css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setIsSending(true);
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    console.log(e.target);
    emailjs
      .sendForm(
        "service_5wry26n",
        "template_s30lvxd",
        e.target,
        "inwOwOBTGUJkl3ilk"
      )
      .then(
        (result) => {
          console.log(result);
          setIsSending(false);
        },
        (error) => {
          alert("An error occurred, please try again.");
          console.log(error.text);
          setIsSending(false);
        }
      );
  };
  return (
    <div className="w-4/5 m-auto my-5">
      <h1 className={css.heading}>{messages.headings.contact}</h1>
      <span className="text-slate-500 my-5">{messages.misc.contactDesc}</span>
      <hr className={css.hr} />
      <div className="form my-5">
        <div className=" mx-auto bg-neutral-800 rounded p-5 shadow-md">
          <h1 className="text-[14px] mb-5 text-center">
            {messages.contactLables.writeEmail}
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex mb-4">
              <span
                htmlFor="email"
                className="w-24 rounded-l px-4 py-2 bg-black whitespace-no-wrap text-sm font-bold border-e border-zinc-600 hover:file:bg-violet-100 text-zinc-500"
              >
                {messages.contactLables.email}
              </span>
              <input
                type="email"
                id="email"
                name="from_email"
                className="bg-black rounded-r px-2 text-sm py-1 w-full focus:outline-none"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex mb-4">
              <span
                htmlFor="name"
                className=" w-24 rounded-l px-4 py-1 bg-black whitespace-no-wrap text-sm font-bold border-e border-zinc-600 text-zinc-500"
              >
                {messages.contactLables.name}
              </span>
              <input
                type="text"
                id="name"
                name="user_name"
                className="bg-black  rounded-r px-2 text-sm py-1 w-full focus:ring-0 focus:outline-none"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex mb-4">
              <span
                htmlFor="subject"
                className="w-24 rounded-l px-4 py-1 bg-black whitespace-no-wrap text-sm font-bold border-e border-zinc-600 text-zinc-500"
              >
                {messages.contactLables.subject}
              </span>
              <input
                type="text"
                id="subject"
                name="subject"
                className="bg-black rounded-r px-2 py-1 w-full focus:ring-0 focus:outline-none"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex mb-4">
              <textarea
                rows={5}
                type="text"
                id="emailbody"
                name="message"
                placeholder="Write your email here..."
                className="bg-black text-sm placeholder-gray-zinc-500 rounded-r px-2 py-2 w-full resize-none focus:ring-0 focus:outline-none"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-4 text-right">
              <button
                type="submit"
                className="text-sm border border-slate-400 x  me-5 bg-black text-white px-4 py-2 rounded hover:bg-slate-900 focus:outline-none focus:shadow-outline-black active:bg-slate-800"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
