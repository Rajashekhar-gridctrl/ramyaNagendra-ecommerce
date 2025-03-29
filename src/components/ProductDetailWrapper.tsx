import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetailPage/ProductDetail';

const ProductDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = {
    id: id || '1',
    name: 'Sample Product',
    price: 99.99,
    images: ['/assets/RNLogo.png'],
    description: 'A detailed description of the product.',
    rating: 4.5,
    reviews: [],
    onAddToCart: () => alert('Added to cart'),
    onAddToWishlist: () => alert('Added to wishlist'),
  };

  return <ProductDetail {...product} />;
};

export default ProductDetailWrapper;