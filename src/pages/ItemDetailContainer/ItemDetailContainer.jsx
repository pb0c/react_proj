import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const {id} = useParams();
  const fetchProducts = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div className="item-detail-container">
      <ItemDetail itemSelected={product}/>
    </div>
  )
}

export default ItemDetailContainer;