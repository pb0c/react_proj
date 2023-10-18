import './styles.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

  return (
    <div className='navbar-container'>
      <div>
        <img src={'./logo.png'} alt="logo" width='100px'/>
      </div>
      <div>
      <h1>Pastelería Rosita</h1>
      </div>
      <div>
        <ul className='list-container'>
          <li><button className='item-button'>Pasteles</button></li>
          <li><button className='item-button'>Cheesecakes</button></li>
          <li><button className='item-button'>Cupcakes</button></li>
          <li><button className='item-button'>Pedidos Especiales</button></li>
        </ul>
        
      </div>
      <div>
        <CartWidget/>
      </div>
    </div>
  );

};

export default Navbar;