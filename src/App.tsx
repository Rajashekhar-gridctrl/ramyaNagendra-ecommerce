import mangnifier from './assets/svg/mangnifier.svg'
import './App.css'
import { ProductCard, ResultsSummary } from './packages'
import productImg from './assets/products/IMG-20250320-WA0285.jpg'

function App() {
  return (
    <>
      <ResultsSummary first={2} last={2} total={2} />
      <ProductCard isCollectionCard>
        <ProductCard.Thumbnail src={productImg} />
        <ProductCard.collectionContent />
      </ProductCard>

      <ProductCard>
        <ProductCard.Thumbnail src={productImg} />
        <ProductCard.Btn label='Add to cart' />
        <ProductCard.Content />
        <ProductCard.Action>
          <ProductCard.IconCta>
            <img src={mangnifier} />
          </ProductCard.IconCta>
        </ProductCard.Action>
      </ProductCard>
    </>
  )
}

export default App
