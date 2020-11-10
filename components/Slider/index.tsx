import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderProps } from "./types";
import { sliderSettings } from "./constants";

const Slider: React.FC<SliderProps> = ({
  children,
  ...rest
}) => (
  <SlickSlider
    {...sliderSettings}
    {...rest}
  >
    {children}
  </SlickSlider>
);

export default Slider;
