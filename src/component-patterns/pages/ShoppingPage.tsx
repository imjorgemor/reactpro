import { ProductButtons } from '../components/ProductButtons';
import { ProductCard} from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';

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
            <ProductCard product={product}>
                <ProductImage />
                <ProductTitle title="hola"/>
                <ProductButtons />

            </ProductCard>

        </div>

    )
}
