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
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: tailwindBreakpoints.large,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
      },
    },
  ],
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
};
