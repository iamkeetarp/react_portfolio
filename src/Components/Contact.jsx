import { useState } from "react";
import axios from "axios";
import messages from "../Messages/common_msgs";
import { css } from "../Messages/common_css";

function Contact() {
  const [formData, setFormData] = useState({});
  const [buttonLable, setButtonLabel] = useState("Send Email");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3003/api/saveFormData",
        formData
      );
      console.log("Form data saved successfully:", response.data);
      setButtonLabel("Email Sent");
    } catch (error) {
      console.error("Error saving form data:", error);
    } finally {
    }
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
                name="email"
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
                name="name"
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
                name="emailbody"
                placeholder="Write your email here..."
                className="bg-black text-sm placeholder-gray-zinc-500 rounded-r px-2 py-2 w-full resize-none focus:ring-0 focus:outline-none"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-4 text-right">
              <button
                type="submit"
                className="text-sm border border-slate-400 x  me-5 bg-black text-white px-4 py-2 rounded hover:bg-slate-900 focus:outline-none focus:shadow-outline-black active:bg-slate-800"
              >
                {buttonLable}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
