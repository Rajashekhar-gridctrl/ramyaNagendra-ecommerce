import { FC } from 'react';
import { ProductCard, Slider } from '../../packages';
import { ITrendingProducts } from './TrendingProducts';
import { SLIDER_MOBILE_SETTINGS } from './TrendingProducts.data';
import mangnifier from '../../assets/svg/mangnifier.svg';

export const TrendingProductsMobile: FC<ITrendingProducts> = ({ products }) => {
  return (
    <div className="container mb-5 pb-5 mt-5">
      <Slider settings={SLIDER_MOBILE_SETTINGS as any}>
        {products.map(({ img, content }) => (
          <ProductCard>
            <ProductCard.Thumbnail src={img.path} />
            <ProductCard.Btn label="Add to cart" />
            <ProductCard.Content {...content} />
            <ProductCard.Action>
              <ProductCard.IconCta>
                <img src={mangnifier} />
              </ProductCard.IconCta>
            </ProductCard.Action>
          </ProductCard>
        ))}
      </Slider>
    </div>
  );
};
