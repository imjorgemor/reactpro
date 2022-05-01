import ProductCard from "../components/ProductCard"

const product = {
    id: "1",
    title: "Coffee Mug",
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
                <ProductCard product={product}/>
            </div>
            
        </div>
    )
}

export default ShoppingPage