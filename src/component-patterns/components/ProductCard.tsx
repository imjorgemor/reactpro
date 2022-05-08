import { useProduct } from "../hooks/useProduct";
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css"


//context API compound component
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

/* COMPOUND COMPONENT PATERN */
export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}

/* TRADITIONAL FORM OF CREATING COMPONENTS
export const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src={product.img ? product.img : noImage} alt="" />
            <span className={styles.productDescription}>{product.title}</span>
            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}

                >-</button>
                <div className={styles.countLabel}> {counter} </div>
                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(+1)}
                >+</button>
            </div>
        </div>
    )
}*/
