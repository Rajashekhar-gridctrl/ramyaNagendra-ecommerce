import { BestSellers, HeroImage, TrendingProducts } from './components';
import './App.css';
import { Testimonials } from './components/Testimonials/Testimonials';

const banners = [
  'https://ramyanagendra.com/cdn/shop/files/banner_website_2_6a757870-fa9e-4c6c-bb11-391f5792cfaa.jpg?v=1724352826&width=3840',
  'https://ramyanagendra.com/cdn/shop/files/banner_website_2_6a757870-fa9e-4c6c-bb11-391f5792cfaa.jpg?v=1724352826&width=3840',
];
const data = [...new Array(20)].fill('product');

function App() {
  return (
    <>
      <HeroImage banners={banners} />
      <section className="container-fluid p-0">
        <BestSellers products={data} />
        <TrendingProducts products={data} />
        <Testimonials />
      </section>
    </>
  );
}

export default App;
