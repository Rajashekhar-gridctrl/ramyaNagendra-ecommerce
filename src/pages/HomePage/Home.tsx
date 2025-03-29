// HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-accent text-white p-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">RamyaNagendra</h1>
          <p className="mt-4">Beauty is Whatever Brings Perfect</p>
          <Link to="/shop" className="mt-6 inline-block bg-white text-accent px-6 py-2 rounded-lg">Shop Now</Link>
        </div>
        <img src="/assets/hero-image.jpg" alt="Jewellery Banner" className="w-1/3 rounded-lg" />
      </section>

      {/* Shop by Category */}
      <section className="categories p-8">
        <h2 className="text-3xl mb-6">Shop by Category</h2>
        <div className="grid grid-cols-5 gap-4">
          {Array(5).fill(0).map((_, index) => (
            <div key={index} className="text-center">
              <div className="h-32 bg-gray-300 rounded-lg"></div>
              <p className="mt-2">Vitamins & Health</p>
              <span className="text-sm text-gray-500">25 Items</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending p-8">
        <h2 className="text-3xl mb-6">Trending Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {Array(8).fill(0).map((_, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
              <div className="h-48 bg-gray-300 mb-4"></div>
              <p className="font-semibold">Product Name</p>
              <p className="text-sm text-gray-500">$299.99 <span className="line-through">$399.99</span></p>
              <button className="mt-2 bg-accent text-white px-4 py-2 rounded-lg">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured p-8">
        <h2 className="text-3xl mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-gray-200 rounded-lg">
            <h3 className="text-xl">Beauty Box</h3>
            <p>Freshwater pearl necklace</p>
            <button className="mt-4 bg-accent text-white px-4 py-2 rounded-lg">Explore</button>
          </div>
          <div className="p-6 bg-gray-200 rounded-lg">
            <h3 className="text-xl">Organic Serium</h3>
            <p>Freshwater pearl necklace</p>
            <button className="mt-4 bg-accent text-white px-4 py-2 rounded-lg">Explore</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials p-8">
        <h2 className="text-3xl mb-6">What Clients Are Saying</h2>
        <div className="grid grid-cols-4 gap-4">
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
              <p className="italic">"Great product and service!"</p>
              <p className="mt-2 font-semibold">- Customer {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-8">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold">RamyaNagendra</h3>
            <p>Dependable safe and professional service.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <p>24/7 customer service available.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <input type="email" placeholder="Enter your email" className="p-2 rounded-lg" />
            <button className="mt-2 bg-accent px-4 py-2 rounded-lg">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
