import React, { useState } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ProductRightPanel from "./product-right-panel";
import './product-details.scss';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  colors: string[];
  weights: number[];
}

interface ProductDetailProps {
  product: Product;
  onAddToCart: (quantity: number) => void;
  onAddToWishlist: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onAddToWishlist }) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
//   const [zoom, setZoom] = useState<boolean>(false);

  return (
    <div className="product-detail-container">
      {/* Left Side - Product Image with Zoom */}
      <div className="product-image-section">
        
      <Zoom>
        <img src={selectedImage} alt={product.name} className='selected-image' />
      </Zoom>
        {/* <div 
          className={`main-image ${zoom ? "zoomed" : ""}`} 
          onMouseEnter={() => setZoom(true)} 
          onMouseLeave={() => setZoom(false)}
        >
          <img src={selectedImage} alt={product.name} />
        </div> */}
        
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt="Product thumbnail" 
              className={selectedImage === image ? "selected" : ""}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Product Details */}
      <ProductRightPanel 
        name={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
        rating={product.rating}
        reviewCount={product.reviewCount}
        colors={product.colors}
        weights={product.weights}
        description={product.description}
        onAddToCart={onAddToCart}
        onAddToWishlist={onAddToWishlist}
      />
    </div>
  );
};
