import { FC } from 'react';
import { ProductCard, Slider } from '../../packages';
import styles from './BestSellers.module.scss';
import { sliderSettingsHandler } from './BestSellers.data';

interface IBestSellers {
  products: {
    img: {
      path: string;
    };
    title: string;
    subTitle: string;
  }[];
}

export const BestSellers: FC<IBestSellers> = ({ products }) => {
  const productsLength = products.length;
  return (
    <article
      className={`${styles.BestSellersWrapper} container mb-5 pb-5 mt-5`}
    >
      <h2>Best Sellers{productsLength}</h2>
      <div className="container">
        {products.length < 5 ? (
         <div className='d-flex'>
          {products.map(({ img, ...details }) => (
            <ProductCard isCollectionCard>
              <ProductCard.Thumbnail
                loading="lazy"
                src={img.path}
              />
              <ProductCard.collectionContent
                title={details.title}
                subTitle={details.subTitle}
              />
            </ProductCard>
          ))}
          </div>
        ): (
          <Slider settings={sliderSettingsHandler(productsLength) as any}>
          {products.map(({ img, ...details }) => (
            <ProductCard isCollectionCard>
              <ProductCard.Thumbnail
                loading="lazy"
                src={img.path}
              />
              <ProductCard.collectionContent
                title={details.title}
                subTitle={details.subTitle}
              />
            </ProductCard>
          ))}
        </Slider>
        )}
      </div>
    </article>
  );
};
