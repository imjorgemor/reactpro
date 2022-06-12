import { ProductButtons } from '../components/ProductButtons';
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import "../styles/custom-styles.css"

const product = {
    id: "1",
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>

            {/* traditional component */}
            {/* <ProductCard product={product} /> */}

            {/* compound component */}
            <div className='cards'>
                <ProductCard
                    product={product}
                    className='bg-dark'
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle title="hola" className="text-white" />
                    <ProductButtons />
                </ProductCard>
                <ProductCard
                    product={product}
                >
                    <ProductImage />
                    <ProductTitle title="hola" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>

    )
}
