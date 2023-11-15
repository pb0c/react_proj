import { Link } from 'react-router-dom';
import './styles.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {

  return (
    <div className='navbar-container'>
      <div>
        <Link to="/"><img src={'./logo.png'} alt="logo" width='100px'/></Link>
      </div>
      <div>
      <h1>Tienda Rosita</h1>
      </div>
      <div>
        <ul className='list-container'>
          <li><Link to={'/category/electronics'} className='item-button'>Electrónicos</Link></li>
          <li><Link to={'/category/jewerely'} className='item-button'>Joyería</Link></li>
          <li><Link to={'/category/women\'s-clothing'} className='item-button'>Ropa de mujer</Link></li>
          <li><Link to={'/category/men\'s-clothing'} className='item-button'>Ropa de hombre</Link></li>
        </ul>
        
      </div>
      <div>
        <CartWidget/>
      </div>
    </div>
  );

};

export default Navbar;