import React from "react";
import Button from "./Button";
import messages from "../Messages/common_msgs";
export default function Card({ data }) {
  const cardStyle = {
    imgStyle: {
      width: "300px",
      height: "220px",
      padding: "5px",
      borderRadius: "10px",
    },
  };

  const descSubStr = data.description.substring(0, 90).concat("...");

  return (
    <>
      <div className="border-red-500 p-2 bg-gray-900 rounded">
        <div id="main">
          <h6 className=" text-left ps-2 text-zinc-500 text-[13px] font-semibold">
            {data.name}
          </h6>
          <hr className="h-px  my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <img src={data.imgUrl} alt="card" style={cardStyle.imgStyle} />

          <div id="description" className="border-t mt-3">
            <label className="text-zinc-500 text-[13px]">
              {messages.labels.desc} :{" "}
            </label>
            <span className="text-zinc-400 text-[12px] leading-normal">
              {descSubStr}
            </span>
          </div>
          <div id="tech-stack" className="mt-1">
            <label className="text-zinc-500 text-[14px]">
              {messages.labels.techStack} :{" "}
            </label>
            <span className="text-zinc-400 text-[14px]">{data.techStack}</span>
          </div>
          <div id="footer" className="justify-center w-1/3 mx-auto">
            <a href={data.url}>
              <Button
                className="border mt-5 py-1 justify-text-center text-center font-sans-helvetica rounded-full hover:bg-slate-700 text-[12px]"
                text={"Explore"}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
