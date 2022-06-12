

//interface de product
export interface Product {
    id: string
    title: string
    img?: string
}

//definimos las props o el value del ProductContext
export interface ProductContextProps {
    counter: number
    increaseBy: (value: number) => void
    product: Product
}