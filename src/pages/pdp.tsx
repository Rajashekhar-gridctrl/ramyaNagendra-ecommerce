import { ProductDetail } from "../components/ProductDetails/product-detail"
import productImage from '../assets/products/Women bracelets/IMG-20250320-WA0450.jpg'

const sampleProduct = {
    id: "1",
    name: "Bangles",
    price: 58.0,
    originalPrice: 68.0,
    rating: 3.5,
    reviewCount: 126,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam ullam is recusandae laborum explicabo id sequi quisquam, ab sunt deleniti quidem ea animi facilis quod nostrum odit! Repellendus voluptas suscipit cum harum.",
    images: [
        productImage,
        productImage,
        productImage
    ],
    colors: ["Gray", "Black", "White"],
    weights: [5, 3, 2],
};


export const PDP = () => {

    const handleAddToCart = (quantity: number) => {
        console.log(`Added ${quantity} items to cart`);
    };

    const handleAddToWishlist = () => {
        console.log("Added to wishlist");
    };
    return <ProductDetail product={sampleProduct}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist} />
}