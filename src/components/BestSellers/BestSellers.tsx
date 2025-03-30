import { FC } from 'react';
import { ProductCard, Slider } from '../../packages';
import styles from './BestSellers.module.scss';
import { sliderSettingsHandler } from './BestSellers.data';

interface IBestSellers {
  products: any[];
}

export const BestSellers: FC<IBestSellers> = ({ products }) => {
  const productsLength = products.length;
  return (
    <article
      className={`${styles.BestSellersWrapper} container mb-5 pb-5 mt-5`}
    >
      <h2>Best Sellers{productsLength}</h2>
      <div className="container">
        <Slider settings={sliderSettingsHandler(productsLength) as any}>
          {products.map((_) => (
            <ProductCard isCollectionCard>
              <ProductCard.Thumbnail
                loading="lazy"
                src="https://ramyanagendra.com/cdn/shop/files/IMG_20241104_111307.jpg?v=1730716719&width=360"
              />
              <ProductCard.collectionContent
                title="White stone neck set premium Quality"
                subTitle="25 Items"
              />
            </ProductCard>
          ))}
        </Slider>
      </div>
    </article>
  );
};
