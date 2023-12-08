import '../NavBar/styles.css'
import * as Icon from 'react-bootstrap-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {productQty} = useContext(CartContext)

    return(
        <div className='cart-icon'>
            <Icon.Cart />
            <span>{productQty}</span>
        </div>
    );
}

export default CartWidget;