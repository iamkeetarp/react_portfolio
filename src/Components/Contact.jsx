import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import messages from "../Messages/common_msgs";

function Contact() {
  return (
    <div className="w-4/5 m-auto">
      <h1 className="text-6xl font-bold">{messages.headings.contact}</h1>
      <span className="text-slate-500 my-5">{messages.misc.contactDesc}</span>
      <div className="form my-5">
        <div className=" mx-auto bg-neutral-800 rounded p-8 shadow-md">
          <h1 className="text-[14px] mb-4 text-center">New Message</h1>

          <form>
            <div className="flex mb-4">
              <span
                htmlFor="email"
                className="w-24 text-sm rounded-l px-4 py-2 bg-black whitespace-no-wrap text-sm font-bold border-r-2 border-zinc-600 hover:file:bg-violet-100"
              >
                Email
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-black rounded-r px-4 py-2 w-full"
              />
            </div>
            <div className="flex mb-4">
              <span
                htmlFor="name"
                className=" w-24 text-sm rounded-l px-4 py-2 bg-black whitespace-no-wrap text-sm font-bold border-r-2 border-zinc-600"
              >
                Name
              </span>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-black  rounded-r px-4 py-2 w-full focus:ring-0"
              />
            </div>
            <div className="flex mb-4">
              <span
                htmlFor="subject"
                className="w-24 text-sm rounded-l px-4 py-2 bg-black whitespace-no-wrap text-sm font-bold border-r-2 border-zinc-600"
              >
                Subject
              </span>
              <input
                type="text"
                id="subject"
                name="subject"
                className="bg-black  rounded-r px-4 py-2 w-full focus:ring-0"
              />
            </div>

            <div className="flex mb-4">
              <textarea
                rows={5}
                type="text"
                id="subject"
                name="subject"
                placeholder="Write your email here..."
                className="bg-black  rounded-r px-4 py-2 w-full resize-none focus:ring-0"
              ></textarea>
            </div>

            <div className="mb-4 text-right">
              <button
                type="submit"
                className="border border-slate-400 x  me-5 bg-black text-white px-4 py-2 rounded hover:bg-slate-900 focus:outline-none focus:shadow-outline-black active:bg-slate-800"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
