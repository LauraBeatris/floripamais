import React from "react";
import Image from "next/image";

import Slider from "components/Slider";

import { TeamSliderProps } from "./types";

const TeamSlider: React.FC<TeamSliderProps> = ({
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
        <div className="min-h-slider-item text-left flex flex-col justify-between text-black bg-white-light rounded-lg mx-2 p-5">
          <header className="w-full text-center">
            <h5 className="text-2xl font-semibold">
              {name}
            </h5>
          </header>

          <div className="flex-grow relative w-full h-full mt-2">
            <Image
              src={photoUrl}
              alt={name}
              layout="fill"
              loading="eager"
              className="rounded-lg absolute w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

export default TeamSlider;
