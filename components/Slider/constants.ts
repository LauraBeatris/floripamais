import { tailwindBreakpoints } from "styles/tailwind";

export const sliderSettings = {
  speed: 500,
  infinite: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: tailwindBreakpoints.small,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: tailwindBreakpoints.large,
      settings: {
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
