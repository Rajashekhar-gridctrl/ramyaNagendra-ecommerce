import './App.css';
import { ResultsSummary, Slider } from './packages';
import { BestSellers, TrendingProducts } from './components';

const banners = [
  'https://ramyanagendra.com/cdn/shop/files/banner_website_2_6a757870-fa9e-4c6c-bb11-391f5792cfaa.jpg?v=1724352826&width=3840',
  'https://ramyanagendra.com/cdn/shop/files/banner_website_2_6a757870-fa9e-4c6c-bb11-391f5792cfaa.jpg?v=1724352826&width=3840',
];
const data = [...new Array(20)].fill('product');

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <section
          style={{ aspectRatio: '16/5', backgroundColor: '#ccccccccc3d' }}
        >
          <Slider
            settings={{
              lazyLoad: 'anticipated',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              nextArrow: undefined,
              prevArrow: undefined,
            }}
          >
            {banners.map((bannerSrc) => (
              <div>
                <img
                  src={bannerSrc}
                  loading="eager"
                  alt="Hero Image"
                  style={{ objectFit: 'fill', width: '100%' }}
                />
              </div>
            ))}
          </Slider>
        </section>
        <BestSellers products={data} />
      </div>
      <TrendingProducts products={data} />
      <ResultsSummary first={2} last={2} total={2} />
    </>
  );
}

export default App;
