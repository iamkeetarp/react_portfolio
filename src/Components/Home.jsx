import React from "react";
import messages from "../Messages/common_msgs";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";

export default function Home() {
  const cricle = {
    zIndex: "-1",
    marginTop: "-5%",
    right: "30%",
  };

  return (
    <div className="w-4/5  m-auto my-5">
      <div id="intro" className="text-6xl text-slate-400">
        I'm <span className="font-bold text-white">Prateek Shukla</span>
      </div>
      <div id="description" className="w-3/4 mt-5 text-slate-300">
        Java Developer with hands-on experience in designing and implementing
        robust applications using Spring Boot. Proficient in working with Kafka
        and Redis for efficient data processing and caching. Worked on SQL/PGSQL
        for database management and React for building responsive user
        interfaces. Adept at collaborating with cross-functional teams to
        deliver high-quality software solutions within deadlines. Eager to
        contribute expertise in full-stack development to a dynamic and
        innovative team
      </div>

      <div
        id="circle"
        className="w-60 h-60 rounded-full bg-gray-900 absolute shadow-2xl"
        style={cricle}
      ></div>
      <div id="bottom-btns" className="flex mt-32">
        <a
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          href="https://drive.google.com/file/d/1QyIfQh9FtFZx074HjV9wTZNwOrU-ax1l/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {messages.buttons.seeMyResume}
        </a>
        <Link to={"/contact"}>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {messages.buttons.getInTouch}
          </button>
        </Link>
      </div>
    </div>
  );
}
