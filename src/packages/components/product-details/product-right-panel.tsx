import React, { useState } from "react";
import './product-details.scss'

interface ProductProps {
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  description: string;
  onAddToCart: (quantity: number) => void;
  onAddToWishlist: () => void;
}

const ProductRightPanel: React.FC<ProductProps> = ({
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  description,
  onAddToCart,
  onAddToWishlist,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="product-right-panel">
      <h2 className="product-name">{name}</h2>
      
      <div className="product-pricing">
        <span className="discounted-price">${price.toFixed(2)}</span>
        <span className="original-price">${originalPrice.toFixed(2)}</span>
      </div>

      <div className="product-rating">
        <span className="stars">{"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}</span>
        <span className="review-count"> ({reviewCount} Reviews)</span>
      </div>

      <p className="product-description">{description}</p>

      <div className="quantity-selector">
        <div className="quantity-box">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </div>
      <div className="buttons">
        <button className="add-to-cart" onClick={() => onAddToCart(quantity)}>Add to Cart</button>
        <button className="add-to-wishlist" onClick={onAddToWishlist}>♡ Add to Wishlist</button>
      </div>
    </div>
  );
};

export default ProductRightPanel;
