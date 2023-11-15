
import { useEffect, useState } from "react"
import Item from "../Item/Item"
import ItemDetail from "../ItemDetail/ItemDetail"
import './styles.css'
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [itemSelectedId, setItemSelectedId] = useState(null);
    const [itemSelected, setItemSelected] = useState(null);
    const {id} = useParams();

    const fetchProducts = 
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => json)
        .catch((error) => console.log(error));

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${itemSelectedId}`)
        .then((res) => res.json())
        .then((json) => setItemSelected(json))
        .catch((error) => console.log(error))
    };

    useEffect(() => {
        fetchProduct();
    }, [itemSelectedId]);


    useEffect(() => {
        const myFunction = async () => {
            if (id) {
                const filteredItems = await fetchProducts.then((productList) => {
                    return productList.filter((prod) => {
                    const idFormated = id.includes('-') 
                    ? id.replace('-',' ') : id;
                    return prod.category === idFormated;         
                });
            });
                setItems(filteredItems);
            }else{
                setItems(fetchProducts);
            };
        };
        myFunction();        
    }, [id]);

    return (
        <div className="item-list-container">
            {itemSelectedId && (
                <div className="item-detail-container">
                <ItemDetail itemSelected={itemSelected} />
            </div>
            )};
            {items.map((item) => {
                return (
                    <Link key={item.id} to={'/item/'+item.id}>
                        <Item
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image} 
                        />
                    </Link>
                );
            })};
        </div>
    );

    
};


export default ItemList;