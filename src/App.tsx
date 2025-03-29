import mangnifier from './assets/svg/mangnifier.svg'
import './App.css'
import { ProductCard, ProductCardAction, ProductCardBtn, ProductCardContent, ProductCardThumbnail, ProductCardIconCta } from './packages'

function App() {

  return (
    <>
      <ProductCard>
        <ProductCardThumbnail src='https://ramyanagendra.com/cdn/shop/files/IMG_20241220_144033.jpg?v=1734769929&width=360' />
        <ProductCardBtn label='Add to cart' />
        <ProductCardContent />
        <ProductCardAction>
          <ProductCardIconCta>
            <img src={mangnifier} />
          </ProductCardIconCta>
        </ProductCardAction>
      </ProductCard>
    </>
  )
}

export default App
