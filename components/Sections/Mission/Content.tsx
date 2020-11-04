import React from "react";

import { missionSectionContent } from "./constants";
import { MissionSectionContentProps } from "./types";

const MissionSectionContent: React.FC<MissionSectionContentProps> = ({
  content = missionSectionContent,
}) => (
  <section className="flex flex-col bg-background-light p-10 md:p-20">
    {content.map(({ title, emoji, text }) => (
      <section key={title} className="mb-16 last:mb-0 flex flex-col items-center">
        <h1 className="text-center text-black font-bold text-3xl">
          {title}
          {" "}
          <span role="img">{emoji}</span>
        </h1>

        <h2 className="text-center text-black font-medium text-2xl mt-8">
          {text}
        </h2>
      </section>
    ))}
  </section>
);

export default MissionSectionContent;
