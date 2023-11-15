import { useEffect, useState } from "react"
import Item from "../Item/Item"
import './styles.css'
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                if (id) {
                    const filteredItems = data.filter((prod) => {
                        const idFormated = id.includes('-') ? id.replace('-', ' ') : id;
                        return prod.category === idFormated;
                    });
                    setItems(filteredItems);
                } else {
                    setItems(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="item-list-container">
            {items.map((item) => (
                <Link to={'/item/' + item.id} key={item.id} >
                    <Item
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ItemList;