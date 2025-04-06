import { BestSellers, TrendingProducts } from '../components';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { banners, data, trendingProductsData } from '../constants/landing-page';
import { HeroImage } from '../packages'

function LandingPage() {
  return (
    <>
      <HeroImage banners={banners} />
      <section className="container-fluid p-0">
        <BestSellers products={data} />
        <TrendingProducts products={trendingProductsData} heading='TRENDING PRODUCTS' />
        <Testimonials />
      </section>
    </>
  );
}

export default LandingPage;