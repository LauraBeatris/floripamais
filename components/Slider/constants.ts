import { Settings } from "react-slick";

import { tailwindBreakpoints } from "styles/tailwind";

/**
 * Defines the minimum number of items in order to define the
 * infinite settings option on the slider.
 *
 * The current count of slider items should be bigger than 3, otherwise
 * the items will be duplicated. Refer to: https://github.com/akiran/react-slick/issues/1171#issuecomment-386906134
*/
export const infiniteSliderMinimumItemsNumber = 3;

export const sliderSettings: Settings = {
  speed: 500,
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

