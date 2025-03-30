import { FC } from 'react';
import Badge from 'react-bootstrap/esm/Badge';
import styles from './thumbnail.module.scss';

interface IProductCardThumbnail {
  src: string;
  discountBadge?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

export const ProductCardThumbnail: FC<IProductCardThumbnail> = ({
  discountBadge,
  src,
  alt = 'Product image',
  loading,
}) => {
  return (
    <div className={styles.thumbnail}>
      <img className="thumbnail" src={src} alt={alt} loading={loading} />
      {discountBadge && (
        <Badge className={styles.thumbnail__badge}>{discountBadge}</Badge>
      )}
    </div>
  );
};
