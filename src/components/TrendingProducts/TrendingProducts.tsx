import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard } from '../../packages';
import styles from './TrendingProducts.module.scss';

import productImg from '../../assets/products/IMG-20250320-WA0285.jpg';
import mangnifier from '../../assets/svg/mangnifier.svg';

interface ITrendingProducts {
  products: any[];
}

export const TrendingProducts: FC<ITrendingProducts> = ({ products }) => {
  return (
    <Container
      className={`${styles.tredingProductsWrapper} mt-5 pt-5 mb-5 pb-5 mt-5`}
    >
      <h2>TRENDING PRODUCTS</h2>
      <Row
        className={`${styles.tredingProductsWrapper} container mb-5 pb-5 mt-5`}
      >
        {products.slice(0, 8).map((_) => (
          <Col xs={3} className="mb-5">
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
    </Container>
  );
};
