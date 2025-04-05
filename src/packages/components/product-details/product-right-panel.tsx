import React, { useState } from "react";
import './product-details.scss'

interface ProductProps {
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  colors: string[];
  weights: number[];
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
  colors,
  weights,
  reviewCount,
  description,
  onAddToCart,
  onAddToWishlist,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedWeight, setSelectedWeight] = useState<number>(weights[0]);
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

      <div className="product-options">
        <div className="color-selection">
          <span>Color: </span>
          {colors.map((color, index) => (
            <button
              key={index}
              className={color === selectedColor ? "selected" : ""}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
        </div>

        <div className="weight-selection">
          <span>Weight: </span>
          {weights.map((weight, index) => (
            <button
              key={index}
              className={weight === selectedWeight ? "selected" : ""}
              onClick={() => setSelectedWeight(weight)}
            >
              {weight} kg
            </button>
          ))}
        </div>
      </div>

      <div className="quantity-selector">
        <span>Qty: </span>
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
