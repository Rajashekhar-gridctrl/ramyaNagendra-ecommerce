import { FC } from 'react';
import { Slider } from '../../packages';

interface IHeroImage {
  banners: any[];
}

export const HeroImage: FC<IHeroImage> = ({ banners }) => {
  return (
    <section style={{ aspectRatio: '16/5', backgroundColor: '#ccccccccc3d' }}>
      <Slider
        settings={{
          lazyLoad: 'anticipated',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          nextArrow: undefined,
          prevArrow: undefined,
        }}
      >
        {banners.map((bannerSrc) => (
          <div>
            <img
              src={bannerSrc}
              loading="eager"
              alt="Hero Image"
              style={{ objectFit: 'fill', width: '100%' }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
