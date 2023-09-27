import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/Items/ItemListContainer';
import { useParams } from 'react-router';

const Home = () => {
    const { id } = useParams();

    // Estado para almacenar la lista de productos
    const [products, setProducts] = useState([]);
    const defaultCategory = 'all';

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                if (id && id !== defaultCategory) {
                    const filteredProducts = data.filter((product) => product.category === id);
                    setProducts(filteredProducts);
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div>
            {/* <h1>Productos de Compras</h1> */}
            <ItemListContainer items={products} />
        </div>
    );
};

export default Home;



