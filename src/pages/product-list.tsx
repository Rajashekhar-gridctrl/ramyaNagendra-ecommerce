import { Row, Col } from "react-bootstrap"
import { BestSellers } from "../components"
import { ShopListHeader } from "../components/shop-list-header/shop-list-header"
import { data, trendingProductsData } from "../constants/landing-page"
import mangnifier from '../assets/svg/mangnifier.svg';
import { ProductCard } from "../packages"
import { SingleWidget } from "../components/single-widget/single-widget";

export const ProductList = () => {
    return (
        <section className="container">
            <BestSellers products={data} />
            <Row>
            <div className="col-sm-3 col-xs-12">
                <SingleWidget />
            </div>
            <div className="col-sm-9 col-xs-12">
                <ShopListHeader />
                <Row
                    className={`mb-5 pb-5 mt-5`}
                >
                    {trendingProductsData.slice(0, 8).map(({ img, content }) => (
                        <Col xs={12} md={4} xl={4} className="mb-5">
                            <ProductCard>
                                <ProductCard.Thumbnail src={img.path} />
                                <ProductCard.Btn label="Add to cart" />
                                <ProductCard.Content {...content} />
                                <ProductCard.Action>
                                    <ProductCard.IconCta>
                                        <img src={mangnifier} />
                                    </ProductCard.IconCta>
                                </ProductCard.Action>
                            </ProductCard>
                        </Col>
                    ))}
                </Row>
            </div>
            </Row>
        </section>
    )
}