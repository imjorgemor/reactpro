import ProductCard from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { ProductButtons } from "../components/ProductButtons";

const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png"
}

const ShoppingPage = () => {
    return (
        <div>
            <div>
                <h1>Shopping store</h1>
            </div>

            <div style={{
                display: "flex",
                flexDirection: 'row',
                flexWrap: "wrap"
            }}>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={"Cafe"} />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage