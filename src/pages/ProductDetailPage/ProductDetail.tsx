// ProductDetail.tsx

import React from "react";
import './ProductDetail.scss';

interface ProductDetailProps {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  rating: number;
  reviews: string[];
  onAddToCart: () => void;
  onAddToWishlist: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  id,
  name,
  price,
  description,
  rating,
  reviews,
  onAddToCart,
  onAddToWishlist,
}) => {
  return (
    <div className="product-detail">
      <img src='./assets/RMLogo.png'></img>
      <h1 id={id}>{name}</h1>
      <p>{description} {price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
      <button onClick={onAddToWishlist}>Add to Wishlist</button>
      <p>{rating} {reviews}</p>
    </div>
  );
};

export default ProductDetail;
