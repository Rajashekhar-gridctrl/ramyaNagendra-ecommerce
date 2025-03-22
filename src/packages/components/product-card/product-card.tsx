import styles from "./product-card.module.scss"
import { Rating } from "../rating/rating"
import { ProductCardAction } from "./action/action";
import { Button } from "../button/button";

interface IProductCard {
    discountBadge?: string;
}

export const ProductCard: React.FC<IProductCard> = ({
    discountBadge = ''
}) => {
    return (

        <article className={styles.product__card}>
            <div className={styles["product__card--thumbnail"]}>

                <a
                    className={`${styles["product__card--thumbnail"]} display-block`}
                    href="product-details.html"
                >
                    <img
                        className={`${styles["product__card--thumbnail__img"]} ${styles["product__primary--img"]}`}
                        src="assets/img/product/main-product/product1.webp"
                        alt="product-img"
                    />
                    <img
                        className={`${styles["product__card--thumbnail__img"]} ${styles["product__secondary--img"]}`}
                        src="assets/img/product/main-product/product2.webp"
                        alt="product-img"
                    />
                </a>
                {discountBadge && <span className={styles.product__badge}>{discountBadge}</span>}
                <ProductCardAction />

                <div className={styles["product__add--to__card"]}>
                    <a
                        className={styles["product__card--btn"]}
                        title="Add To Cart"
                        href="cart.html"
                    >
                        Add to Cart
                        <svg
                            width="17"
                            height="15"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.2371 4H11.5261L8.5027 0.460938..." fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <div className={styles["product__add--to__card"]}>
                    <Button label="Add to Cart" />
                </div>
            </div>
            <div className={`${styles["product__card--content"]} text-center`}>
                <Rating fill={1} totalCount={5} />
                <h3 className={styles["product__card--title"]}><a href="product-details.html">Z 7-8mm Freshwater Button is </a></h3>
                <div className={styles["product__card--price"]}>
                    <span className={styles.current__price}>$239.52</span>
                    <span className={styles.old__price}> $362.00</span>
                </div>
            </div>
        </article>
    )
}