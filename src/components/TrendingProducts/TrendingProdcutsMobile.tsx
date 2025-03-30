import { FC } from 'react';
import { ProductCard, Slider } from '../../packages';
import { ITrendingProducts } from './TrendingProducts';
import { SLIDER_MOBILE_SETTINGS } from './TrendingProducts.data';

import productImg from '../../assets/products/IMG-20250320-WA0285.jpg';
import mangnifier from '../../assets/svg/mangnifier.svg';

export const TrendingProductsMobile: FC<ITrendingProducts> = ({ products }) => {
  return (
    <div className="container mb-5 pb-5 mt-5">
      <Slider settings={SLIDER_MOBILE_SETTINGS as any}>
        {products.map(() => (
          <ProductCard>
            <ProductCard.Thumbnail src={productImg} />
            <ProductCard.Btn label="Add to cart" />
            <ProductCard.Content />
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
