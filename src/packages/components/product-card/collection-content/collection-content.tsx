import { FC } from 'react';
import styles from './collection-content.module.scss';

interface ICollectionCard {
  title: string;
  subTitle?: string;
}

export const ProductCollectionCardContent: FC<ICollectionCard> = ({
  title,
  subTitle,
}) => {
  return (
    <div className={`${styles.collectionContent} collectionContent`}>
      <h3 className={styles['collectionContent--title']}>{title}</h3>
      {subTitle && (
        <span className={styles['collectionContent--subtitle']}>
          {subTitle}
        </span>
      )}
    </div>
  );
};
