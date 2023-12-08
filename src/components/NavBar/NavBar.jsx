import { NavLink } from 'react-router-dom';
import './styles.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {

  return (
    <div className='navbar-container'>
      <div>
        <NavLink to="/"><img src={'./logo.png'} alt="logo" width='100px'/></NavLink>
      </div>
      <div>
      <h1>Tienda Rosita</h1>
      </div>
      <div>
        <ul className='list-container'>
          <li><NavLink to={'/category/electronics'} activeClassname="active" className='item-button'>Electrónicos</NavLink></li>
          <li><NavLink to={'/category/jewelery'} activeClassname="active" className='item-button'>Joyería</NavLink></li>
          <li><NavLink to={'/category/women\'s-clothing'} activeClassname="active" className='item-button'>Ropa de mujer</NavLink></li>
          <li><NavLink to={'/category/men\'s-clothing'} activeClassname="active" className='item-button'>Ropa de hombre</NavLink></li>
        </ul>
        
      </div>
      <div>
        <CartWidget/>
      </div>
    </div>
  );

};

export default Navbar;