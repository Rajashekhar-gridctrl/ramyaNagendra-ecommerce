import { FC } from 'react';
import { ProductCard, Slider } from '../../packages';
import styles from './BestSellers.module.scss';

interface IBestSellers {
  products: any[];
}

export const BestSellers: FC<IBestSellers> = ({ products }) => {
  return (
    <article
      className={`${styles.BestSellersWrapper} container mb-5 pb-5 mt-5`}
    >
      <h2>Best Sellers</h2>
      <div className="container">
        <Slider
          settings={{
            lazyLoad: 'ondemand',
            slidesToShow: 5,
            centerPadding: '50px',
          }}
        >
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
