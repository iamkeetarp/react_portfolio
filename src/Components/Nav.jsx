import React from "react";
import messages from "../Messages/common_msgs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  return (
    <div className="w-4/5 my-5 m-auto rounded h-full w-4/5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  px-2 py-1 flex justify-between">
      <div className="flex">
        <h2 className="font-bold">
          <Link to={"/"} className="text-[12px] mx-2">
            {messages.title}
          </Link>
        </h2>
        <div id="links" className="ms-4">
          <Link to={"/about"} className="text-[12px] mx-2">
            {messages.navbar.about}
          </Link>
          <Link to={"/work"} className="text-[12px] mx-2">
            {messages.navbar.work}
          </Link>
          <Link to={"/contact"} className="text-[12px] mx-2">
            {messages.navbar.contact}
          </Link>
          <Link to={"/more"} className="text-[12px] mx-2">
            {messages.navbar.more}
          </Link>
        </div>
      </div>
      <div>
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
