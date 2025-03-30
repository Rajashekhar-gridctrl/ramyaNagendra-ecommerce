import { ResultsSummary } from './packages';
import { BestSellers, HeroImage, TrendingProducts } from './components';
import './App.css';

const banners = [
  'https://ramyanagendra.com/cdn/shop/files/banner_website_2_6a757870-fa9e-4c6c-bb11-391f5792cfaa.jpg?v=1724352826&width=3840',
  'https://ramyanagendra.com/cdn/shop/files/banner_website_2_6a757870-fa9e-4c6c-bb11-391f5792cfaa.jpg?v=1724352826&width=3840',
];
const data = [...new Array(20)].fill('product');

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <HeroImage banners={banners} />
        <BestSellers products={data} />
      </div>
      <TrendingProducts products={data} />
      <ResultsSummary first={2} last={2} total={2} />
    </>
  );
}

export default App;
