import { FC, PropsWithChildren } from 'react';
import styles from './icon-cta.module.scss';
import { Button } from '../../../button/button';


interface IProductCardIconCta {
    title?: string;
}

export const ProductCardIconCta: FC<PropsWithChildren<IProductCardIconCta>> = ({ title, children }) => {
    return (
        <li className={styles.iconCtaWrapper}>
            <Button
                className={styles.iconCtaWrapper__btn}
                title={title}
                variant="link"
            >
                {children}
                {title && <span className="visually-hidden">{title}</span>}
            </Button>
        </li>
    )
}