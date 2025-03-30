export const SLIDER_MOBILE_SETTINGS = {
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  centerPadding: '50px',
  responsive: [
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerPadding: '20px',
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '30px',
        centerMode: true,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '10px',
        centerMode: true,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        centerMode: true,
      },
    },
  ],
};
