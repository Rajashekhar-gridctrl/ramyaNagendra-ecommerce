import styles from "./product-card.module.scss"
import { Rating } from "../rating/rating"
import { ProductCardAction } from "./action/action";
import { Button } from "../button/button";
import { ProductCardContent } from "./content/content";

interface IProductCard {
    discountBadge?: string;
}

export const ProductCard: React.FC<IProductCard> = ({
    discountBadge = ''
}) => {
    return (

        <article className={styles.product__card}>
            <div className={styles["product__card--thumbnail"]}>
                <img
                    className={`${styles["product__card--thumbnail__img"]} ${styles["product__primary--img"]}`}
                    src="https://ramyanagendra.com/cdn/shop/files/a0662090-f042-4412-8a87-396c84b979d4.jpg?v=1725533152&width=360"
                    alt="product-img"
                />
                {discountBadge && <span className={styles.product__badge}>{discountBadge}</span>}
                <ProductCardAction />
            </div>
            <div className={styles["product__add--to__card"]}>
                <Button label="Add to Cart" />
            </div>
            <ProductCardContent />
        </article>
    )
}