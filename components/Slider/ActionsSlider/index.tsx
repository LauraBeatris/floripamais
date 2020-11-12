import React from "react";

import Slider from "components/Slider";
import Touchable from "components/Touchable";

import { ActionsSliderProps } from "./types";

const ActionsSlider: React.FC<ActionsSliderProps> = ({
  buttonText,
  formattedActions,
}) => (
  <Slider>
    {
      formattedActions.map(({
        id,
        name,
        touchableHref,
        description,
        formattedDate,
      }) => (
        <div className="py-2" key={id}>
          <div className="shadow-md min-h-slider-item text-left flex flex-col justify-between items-start text-black bg-white-light rounded-lg mx-2 p-5">
            <header className="w-full">
              <small className="font-semibold text-xs">
                {formattedDate}
              </small>

              <h5 className="text-2xl font-semibold">
                {name}
              </h5>
            </header>

            <p className="text-left font-light max-w-full my-10">
              {description}
            </p>

            <Touchable
              touchableHref={touchableHref}
              touchableWrapperClassName="w-full"
              touchableElementClassName="text-xs"
            >
              {buttonText}
            </Touchable>
          </div>
        </div>
      ))
    }
  </Slider>
);

export default ActionsSlider;
