import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard, useBreakpoint } from '../../packages';
import { TrendingProductsMobile } from './TrendingProdcutsMobile';
import mangnifier from '../../assets/svg/mangnifier.svg';
import styles from './TrendingProducts.module.scss';


export interface ITrendingProducts {
  heading?: string;
  products: {
    img: {
      path: string;
    },
    content: {
      title: string;
      price: string;
      oldPrice: string;
    }
  }[];
}

export const TrendingProducts: FC<ITrendingProducts> = ({ products, heading }) => {
  const breakPoint = useBreakpoint();
  return (
    <Container
      className={`${styles.tredingProductsWrapper} mt-5 pt-5 mb-5 pb-5 mt-5`}
    >
      {heading && <h2>{heading}</h2>}
      {breakPoint === 'xs' ? (
        <TrendingProductsMobile products={products} />
      ) : (
        <Row
          className={`${styles.tredingProductsWrapper} container mb-5 pb-5 mt-5`}
        >
          {products.slice(0, 8).map(({ img, content }) => (
            <Col xs={12} md={4} xl={3} className="mb-5">
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
      )}
    </Container>
  );
};
