import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const [productQty, setProductQty] = useState(0);

    const addItem = (product, quantity) => {

        setProducts([
            ...products,
            {
                ...product,
                quantity
            },
        ]);
        
    };

    useEffect(() => {
        setProductQty(products.reduce((acc, product) => acc + product.quantity, 0), 0);
    }, [products]);
    

  return (
    <CartContext.Provider value={{products, addItem, productQty}}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
