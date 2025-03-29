
import { PropsWithChildren } from "react";
import styles from "./product-card.module.scss"

export const ProductCard: React.FC<PropsWithChildren> = ({ children }) => {
    return (

        <article className={styles.product__card}>
            {children}
        </article>
    )
}