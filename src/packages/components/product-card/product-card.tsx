import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Card from 'react-bootstrap/Card';
import { ProductCardAction } from './actions/actions';
import { ProductCardIconCta } from './actions/icon-cta/icon-cta';
import { ProductCardBtn } from './button/button';
import { ProductCardContent } from './content/content';
import { ProductCardThumbnail } from './thumbnail/thumbnail';
import styles from './product-card.module.scss';
import { ProductCollectionCardContent } from './collection-content/collection-content';

interface ProductCardProps extends PropsWithChildren {
  isCollectionCard?: boolean;
}

type ProductCardType = React.FC<ProductCardProps> & {
  IconCta: typeof ProductCardIconCta;
  Action: typeof ProductCardAction;
  Content: typeof ProductCardContent;
  Thumbnail: typeof ProductCardThumbnail;
  Btn: typeof ProductCardBtn;
  collectionContent: typeof ProductCollectionCardContent;
};

export const ProductCard: ProductCardType = ({
  children,
  isCollectionCard = false,
}) => {
  return (
    <Card
      className={clsx(
        styles.productCard,
        isCollectionCard
          ? styles.productCard__isCollectionCard
          : styles.productCard__isProductCard
      )}
    >
      {children}
    </Card>
  );
};

ProductCard.IconCta = ProductCardIconCta;
ProductCard.Action = ProductCardAction;
ProductCard.Content = ProductCardContent;
ProductCard.collectionContent = ProductCollectionCardContent;
ProductCard.Thumbnail = ProductCardThumbnail;
ProductCard.Btn = ProductCardBtn;
