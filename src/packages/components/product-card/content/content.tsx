import { FC } from 'react';
import { Rating } from '../../rating/rating';
import styles from './content.module.scss';

export const ProductCardContent: FC = () => {
  return (
    <div className={`${styles.content} text-center`}>
      <Rating fill={1} totalCount={5} />
      <h3 className={styles['content--title']}>
        Z 7-8mm Freshwater Button is{' '}
      </h3>
      <div className={styles['content--price']}>
        <span className={styles.current__price}>$239.52</span>
        <span className={styles.old__price}> $362.00</span>
      </div>
    </div>
  );
};
