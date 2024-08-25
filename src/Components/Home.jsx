import React from "react";
import messages from "../Messages/common_msgs";
import { Link } from "react-router-dom";
import { css } from "../Messages/common_css";

export default function Home() {
  const cricle = {
    zIndex: "-1",
    marginTop: "-5%",
    right: "30%",
  };

  return (
    <div className="w-4/5 m-auto my-5">
      <div id="intro" className={css.heading}>
        I'm <span className="font-bold text-white">{messages.labels.name}</span>
      </div>
      <div id="description" className={css.description}>
        {messages.homeLables.description}
      </div>

      <div
        id="circle"
        className="w-60 h-60 rounded-full bg-gray-900 absolute shadow-2xl"
        style={cricle}
      ></div>
      <div id="bottom-btns" className="justify-left mt-10 md:mt-16 lg:mt-32">
        <Link to={"/contact"}>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {messages.buttons.getInTouch}
          </button>
        </Link>
      </div>
    </div>
  );
}
