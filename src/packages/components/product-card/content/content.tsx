import { FC } from 'react';
import { Rating } from '../../rating/rating';
import styles from './content.module.scss';

export interface IProductCardContent {
  title: string;
  price: string;
  oldPrice: string;
  rating?: number;
  reviews?: number;
}

export const ProductCardContent: FC<IProductCardContent> = ({ title, price, oldPrice, rating = 5, reviews = 5 }) => {
  return (
    <div className={`${styles.content} text-center`}>
      <Rating fill={rating} totalCount={5} reviews={reviews} />
      <h3 className={styles['content--title']}>
        {title.length > 20 ? title.slice(0, 20).padEnd(22, '.') : title}
      </h3>
      <div className={styles['content--price']}>
        <span className={styles.current__price}>{price}</span>
        <span className={styles.old__price}>{oldPrice}</span>
      </div>
    </div>
  );
};
