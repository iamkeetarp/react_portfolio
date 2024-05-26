import React, { useState } from "react";
import messages from "../Messages/common_msgs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  const [selectedLink, setSelectedLink] = useState("/");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <div className="w-11/12 md:w-4/5 sm:w-4/5 my-5 m-auto rounded h-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  px-2 py-1 flex justify-between">
      <div className="flex justify-between">
        <h2 className="font-bold">
          <Link
            to={"/"}
            onClick={() => handleLinkClick("/")}
            className={`text-sky-300 mx-2 text-[12px] ${
              selectedLink === "/" ? "text-sky-300" : ""
            }`}
          >
            {messages.title}
          </Link>
        </h2>
        <div id="links" className="ms-4">
          <Link
            to={"/about"}
            onClick={() => handleLinkClick("/about")}
            className={`text-white mx-2 text-[12px] ${
              selectedLink === "/about" ? "text-sky-600 font-bold" : ""
            }`}
          >
            {messages.navbar.about}
          </Link>
          <Link
            to={"/work"}
            onClick={() => handleLinkClick("/work")}
            className={`text-white mx-2 text-[12px] ${
              selectedLink === "/work" ? "text-sky-600" : ""
            }`}
          >
            {messages.navbar.work}
          </Link>
          <Link
            to={"/contact"}
            onClick={() => handleLinkClick("/contact")}
            className={`text-white mx-2 text-[12px] ${
              selectedLink === "/contact" ? "text-sky-600" : ""
            }`}
          >
            {messages.navbar.contact}
          </Link>
          <Link
            to={"/more"}
            onClick={() => handleLinkClick("/more")}
            className={`text-white mx-2 text-[12px] ${
              selectedLink === "/more" ? "text-sky-600" : ""
            }`}
          >
            {messages.navbar.more}
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <a href={messages.urls.linkedin} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="mx-2" />
        </a>
        <a href={messages.urls.twitter} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="mx-2" />
        </a>
        <a href={messages.urls.github} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="mx-2" />
        </a>
      </div>
    </div>
  );
}
