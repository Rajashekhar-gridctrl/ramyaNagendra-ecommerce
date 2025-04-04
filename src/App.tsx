import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import productImage from './assets/IMG-20250320-WA0252.jpg'
import './App.css'
import { Button, ProductCard, ParentSidebar, ProductDetail } from './packages'

const sampleProduct = {
  id: "1",
  name: "Bangles",
  price: 58.0,
  originalPrice: 68.0,
  rating: 3.5,
  reviewCount: 126,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  images: [
    productImage, 
    productImage,
    productImage
  ],
};

function App() {
  const [count, setCount] = useState(0)
  const handleAddToCart = (quantity: number) => {
    console.log(`Added ${quantity} items to cart`);
  };

  const handleAddToWishlist = () => {
    console.log("Added to wishlist");
  };

  return (
    <>
      <ParentSidebar />
      <ProductCard />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Button label='Purchase' />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ProductDetail product={sampleProduct}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist} />
    </>
  )
}

export default App
