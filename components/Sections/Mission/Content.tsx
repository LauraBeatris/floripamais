import React from "react";
import Emoji from "a11y-react-emoji";

import withMaxWidthContainer from "hocs/withMaxWidthContainer";

import { missionSectionContent, missionSectionId } from "./constants";
import { MissionSectionContentProps } from "./types";

const MissionSectionContent: React.FC<MissionSectionContentProps> = ({
  content = missionSectionContent,
}) => (
  <section
    id={missionSectionId}
    className="flex flex-col bg-white-shade p-10 md:p-20"
  >
    {
      content.map(({ title, emoji, text }) => (
        <section key={title} className="mb-16 last:mb-0 flex flex-col items-center">
          <h1 className="text-center text-black font-bold text-3xl">
            {title}
            {" "}
            <Emoji symbol={emoji} />
          </h1>

          <h2 className="text-center text-black font-medium text-2xl mt-8">
            {text}
          </h2>
        </section>
      ))
    }
  </section>
);

export default withMaxWidthContainer(MissionSectionContent);
