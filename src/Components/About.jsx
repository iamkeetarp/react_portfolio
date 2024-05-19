import React from "react";
import messages from "../Messages/common_msgs";

function About() {
  const cricle = {
    zIndex: "-1",
    marginTop: "-1%",
    right: "20%",
  };
  return (
    <div className="w-4/5 m-auto">
      <h1 className="text-6xl font-bold">{messages.headings.about}</h1>
      <span className="text-slate-500 my-5">{messages.misc.aboutDesc}</span>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div
        id="circle"
        className="w-60 h-60 rounded-full bg-gray-900 absolute shadow-2xl"
        style={cricle}
      ></div>
      <div id="who-am-i" className=" w-1/2 my-9">
        <h3 className="text-white font-bold text-[16px]">Who am I ?</h3>
        <p className="text-zinc-500 mt-2">
          I'm
          <span className="text-white font-bold"> Prateek </span> a
          multi-disciplinary backend engineer at a fintech company based in
          Chennai, India 🇮🇳.
        </p>
      </div>
      <div id="what-i-do" className=" w-1/2 my-9">
        <h3 className="text-white font-bold text-[16px]">What I do ?</h3>
        <p className="text-zinc-500 mt-2">
          With one and half years of invaluable experience in my role at
          National Payments Corporation of India (NPCI) – a fintech company
          based in Chennai, I have honed my skills in Core Java, Springboot,
          REST api, React.js, TailwindCSS, and TypeScript, allowing me to craft
          seamless and interactive user experiences. During my time at NPCI, I
          had the privilege of collaborating on projects for esteemed banks such
          as Reserve Bank of India (RBI). It was an incredibly rewarding
          experience to develop applications that directly impact the digital
          payment infrastructure of India.
        </p>
        <p className="text-zinc-500 mt-5">
          Let's build something great together
        </p>
      </div>
    </div>
  );
}

export default About;
