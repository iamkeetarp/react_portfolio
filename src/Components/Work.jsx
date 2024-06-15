import React from "react";
import messages from "../Messages/common_msgs";
import Card from "../base/Card";
import { projects } from "../data/projects";
import { css } from "../Messages/common_css";

export default function Work() {
  return (
    <div className="w-4/5  m-auto my-5">
      <h1 className={css.heading}>{messages.headings.work}</h1>
      <hr className={css.hr} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between p-4">
        {projects.map((item, key) => (
          <Card data={item} key={key} />
        ))}
      </div>
    </div>
  );
}
