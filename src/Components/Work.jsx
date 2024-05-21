import React from "react";
import messages from "../Messages/common_msgs";
import Card from "../base/Card";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <div className="w-4/5 m-auto">
      <h1 className="text-6xl font-bold">{messages.headings.work}</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="grid grid-cols-4 gap-4 justify-between p-4">
        {projects.map((item, key) => (
          <Card data={item} key={key} />
        ))}
      </div>
    </div>
  );
}
