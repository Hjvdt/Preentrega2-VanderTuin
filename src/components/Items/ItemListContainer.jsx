
import React, { useState, useEffect } from 'react';
import { Row, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../../Hooks/useFetch';
import { useParams, useNavigate } from 'react-router-dom';

const ItemListContainer = () => {
    const [allItems] = useFetch("https://fakestoreapi.com/products/");
    const [items, setItems] = useState(allItems);
    const { categoryId } = useParams();
    const navigate = useNavigate();


    const handleFilterClick = (category) => {
        if (category === categoryId) {

            navigate('/');
        } else {

            navigate(`/category/${category}`);
        }
    };

    useEffect(() => {
        if (allItems !== null) {
            if (categoryId && categoryId !== 'all') {
                const filteredItems = allItems.filter((item) => item.category === categoryId);
                setItems(filteredItems);
            } else {
                setItems(allItems);
            }
        }
    }, [categoryId, allItems]);

    return (
        <Container>
            <div className="text-center">
                <Button variant="outline-primary" onClick={() => handleFilterClick('electronics')}style={{ fontWeight: 'bold',color: 'black',borderWidth: '4px', borderColor: 'rgba(119, 31, 44, 0.781)'}}>Electrónicos</Button>
                <Button variant="outline-primary" onClick={() => handleFilterClick('jewelery')}style={{ fontWeight: 'bold',color: 'black', borderWidth: '4px',borderColor: 'rgba(119, 31, 44, 0.781)' }}>Joyería</Button>
                <Button variant="outline-primary" onClick={() => handleFilterClick("women's clothing")}style={{ fontWeight: 'bold', color: 'black', borderWidth: '4px',borderColor: 'rgba(119, 31, 44, 0.781)' }}>Ropa</Button>
                <Button variant="outline-primary" onClick={() => handleFilterClick('all')}style={{ fontWeight: 'bold', color: 'black', borderWidth: '4px',borderColor: 'rgba(119, 31, 44, 0.781)' }}>Todos</Button>
            </div>
            <Row>
                {items !== null && <ItemList items={items} />}
            </Row>
        </Container>
    );
};

export default ItemListContainer;





