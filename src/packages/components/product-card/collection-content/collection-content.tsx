import { FC } from 'react';
import styles from './collection-content.module.scss';

export const ProductCollectionCardContent: FC = () => {
    return (
        <div className={`${styles.collectionContent} collectionContent`}>
            <h3 className={styles["collectionContent--title"]}>Z 7-8mm Freshwater Button is </h3>
            <span className={styles["collectionContent--subtitle"]}>25 Items</span>
        </div>
    )
}