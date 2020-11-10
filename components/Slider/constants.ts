import { Settings } from "react-slick";

import { tailwindBreakpoints } from "styles/tailwind";

export const sliderSettings: Settings = {
  infinite: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: tailwindBreakpoints.small,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: tailwindBreakpoints.large,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: false,
        dots: true,
      },
    },
  ],
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 2000,
};

