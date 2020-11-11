import React from "react";
import Image from "next/image";

import Slider from "components/Slider";

import { MembersSliderProps } from "./types";

const MembersSlider: React.FC<MembersSliderProps> = ({
  members,
}) => (
  <Slider
    pauseOnHover={false}
    autoplay
    infinite
    speed={5000}
  >
    {members.map(({
      id,
      name,
      photoUrl,
    }) => (
      <div className="py-2" key={id}>
        <div className="shadow-md min-h-slider-item text-left flex flex-col justify-between items-start text-black bg-white-light rounded-lg mx-2 p-5">
          <header className="w-full">
            <h5 className="text-2xl font-semibold">
              {name}
            </h5>
          </header>

          <div className="flex-grow relative w-full h-full mt-2">
            <Image
              src={photoUrl}
              alt={name}
              className="rounded-lg absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

export default MembersSlider;
