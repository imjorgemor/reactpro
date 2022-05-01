import useProduct from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

interface Props {
    product: Product
}

interface Product {
    id: string
    title: string
    img?: string
}




const ProductCard = ({product}: Props) => {

    const {counter, increaseBy} = useProduct()

    
    return (
        <div className={styles.productCard}>
            <img className={styles.productCard} src={product.img? product.img : noImage} alt="Coffee mug" />
           

            <span className={styles.productDescription}>{product.title}</span>

            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                >-</button>
                <div className={styles.countLabel}>{counter}</div>
                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(+1)}
                >+</button>
            </div>
        </div>
    )
}

export default ProductCard