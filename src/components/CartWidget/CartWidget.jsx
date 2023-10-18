import '../NavBar/styles.css'
import * as Icon from 'react-bootstrap-icons';

const CartWidget = () => {
    return(
        <div className='cart-icon'>
            <Icon.Cart />
            <span>3</span>
        </div>
    );
}

export default CartWidget;