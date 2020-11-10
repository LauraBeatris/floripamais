import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderProps } from "./types";
import { sliderSettings, infiniteSliderMinimumItemsNumber } from "./constants";

const Slider: React.FC<SliderProps> = ({
  children,
  ...rest
}) => {
  const infinite = (
    children
      ? React.Children.count(children) > infiniteSliderMinimumItemsNumber
      : false
  );

  return (
    <SlickSlider {...sliderSettings} infinite={infinite} {...rest}>
      {children}
    </SlickSlider>
  );
};

export default Slider;
