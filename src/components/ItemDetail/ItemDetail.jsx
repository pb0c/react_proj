import './styles.css'
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({itemSelected}) => {
  const [count, setCount] = useState(0);
  const stock = 10;
  const navigate = useNavigate();
  const {addItem} = useContext(CartContext)
  const addToCart = () => {
    addItem(itemSelected, count);
  };

  const handleNavigation = () =>{
    navigate('/cart');
  };

  return (
    <div>
      <h6 className="card-tittle">{itemSelected?.title}</h6>
      <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
      <div className="card-description">
        <p>{itemSelected?.description}</p>
      </div>
      <span>Stock: 10</span>
      <p>${itemSelected?.price}</p>

      <div>
        <button onClick={addToCart}>Agregar a carrito</button>
        <button onClick={handleNavigation}>Terminar compra</button>
        <ItemCount count={count} setCount={setCount} stock={stock}/>
      </div>
    </div>

  );

};

export default ItemDetail;