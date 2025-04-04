import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';

interface ProductImageProps {
  image: string;
  zoomImage?: string;
  alt: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ image, zoomImage, alt }) => {
  return (
    <div className="product-image-container">
      <InnerImageZoom
        src={image}
        zoomSrc={zoomImage || image}
        zoomType="hover"
        zoomPreload={true}
        width={500}
        height={500}
        hideHint={false}
      />
    </div>
  );
};
