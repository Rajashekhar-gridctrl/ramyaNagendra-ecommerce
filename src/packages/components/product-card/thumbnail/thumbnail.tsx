import { FC } from "react"
import Badge from "react-bootstrap/esm/Badge"
import styles from "./thumbnail.module.scss"

interface IProductCardThumbnail {
    src: string;
    discountBadge?: string;
    alt?: string;
}

export const ProductCardThumbnail: FC<IProductCardThumbnail> = ({ discountBadge, src, alt = "Product image" }) => {
    return (
        <div className={styles.thumbnail}>
            <img
                className='thumbnail'
                src={src}
                alt={alt}
            />

            {discountBadge && <Badge className={styles.thumbnail__badge}>{discountBadge}</Badge>}
        </div>
    )
}