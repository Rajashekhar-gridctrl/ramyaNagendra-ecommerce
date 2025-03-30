import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard, useBreakpoint } from '../../packages';
import styles from './TrendingProducts.module.scss';

import productImg from '../../assets/products/IMG-20250320-WA0285.jpg';
import mangnifier from '../../assets/svg/mangnifier.svg';
import { TrendingProductsMobile } from './TrendingProdcutsMobile';

export interface ITrendingProducts {
  products: any[];
}

export const TrendingProducts: FC<ITrendingProducts> = ({ products }) => {
  const breakPoint = useBreakpoint();
  return (
    <Container
      className={`${styles.tredingProductsWrapper} mt-5 pt-5 mb-5 pb-5 mt-5`}
    >
      <h2>TRENDING PRODUCTS</h2>
      {breakPoint === 'xs' ? (
        <TrendingProductsMobile products={products} />
      ) : (
        <Row
          className={`${styles.tredingProductsWrapper} container mb-5 pb-5 mt-5`}
        >
          {products.slice(0, 8).map(() => (
            <Col xs={12} md={4} xl={3} className="mb-5">
              <ProductCard>
                <ProductCard.Thumbnail src={productImg} />
                <ProductCard.Btn label="Add to cart" />
                <ProductCard.Content />
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
