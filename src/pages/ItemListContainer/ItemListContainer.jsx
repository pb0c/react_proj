import '../../components/NavBar/styles.css'
import '../../components/ItemCount/ItemCount'
import '../../components/ItemList/ItemList'
import '../../components/Item/Item'
import ItemCount from '../../components/ItemCount/ItemCount';
import Item from '../../components/Item/Item';
import ItemList from '../../components/ItemList/ItemList';
import { useState, useEffect } from 'react';

const ItemListContainer = ( {} ) => {
  const [productList, setProductList] = useState([]);
  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProductList(json))
    .catch((error) => console.log(error))
  };

    useEffect(() => {
      fetchProducts();
    }, []);

  return (
    <div>
      <h1>Bienvenido</h1>
      {/* <Item/>
      <ItemCount/> */}
      <ItemList/>
    </div>
    )
};

export default ItemListContainer;