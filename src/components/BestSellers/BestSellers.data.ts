export const sliderSettingsHandler = (productsLength: number) => ({
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  centerPadding: '50px',
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: productsLength >= 3 ? 3 : productsLength,
        slidesToScroll: productsLength >= 3 ? 3 : productsLength,
        initialSlide: productsLength >= 3 ? 3 : productsLength,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20px',
        centerMode: true,
      },
    },
  ],
});
