import { Settings } from "react-slick";

import { tailwindBreakpoints } from "styles/tailwind";

export const sliderSettings: Settings = {
  dots: true,
  arrows: false,
  infinite: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: tailwindBreakpoints.small,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: tailwindBreakpoints.large,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ],
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 2000,
};

