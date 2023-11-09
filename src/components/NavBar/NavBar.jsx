import { Link } from 'react-router-dom';
import './styles.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {

  return (
    <div className='navbar-container'>
      <div>
        <img src={'./logo.png'} alt="logo" width='100px'/>
      </div>
      <div>
      <h1>Tienda Rosita</h1>
      </div>
      <div>
        <ul className='list-container'>
          <li><Link to={'/catergory/electronics'} className='item-button'>Electrónicos</Link></li>
          <li><Link to={'/catergory/jewerly'} className='item-button'>Joyería</Link></li>
          <li><Link to={'/catergory/women'} className='item-button'>Ropa de mujer</Link></li>
          <li><Link to={'/catergory/men'} className='item-button'>Ropa de hombre</Link></li>
        </ul>
        
      </div>
      <div>
        <CartWidget/>
      </div>
    </div>
  );

};

export default Navbar;