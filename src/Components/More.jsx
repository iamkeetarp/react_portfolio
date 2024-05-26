import React from "react";
import messages from "../Messages/common_msgs";
import { skills } from "../data/skills";

export default function More() {
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-6xl font-bold">{messages.headings.more}</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div id="skills">
        {Object.entries(skills).map(([key, array]) => (
          <div key={key}>
            <p className="my-2 bg-gray-400 inline-block	backdrop-blur-sm bg-opacity-20 p-1 px-1.5 cursor-pointer border rounded text-sm font-semibold text-sky-600 hover:text-sky-400 outline-none border-none">
              {key}
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-between p-4">
              {array.map((item) => (
                <div key={item.id} className="mx-auto">
                  <div className="h-12 w-12">
                    <img src={item.iconPath} alt="Logo" className="w-12 h-12" />
                  </div>
                  <p className="text-[12px] text-center">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
