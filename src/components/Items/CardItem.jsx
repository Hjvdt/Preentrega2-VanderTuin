import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardItem = ({ item }) => {
    const cardStyle = {
        width: '25rem', 
            height: '90%',  
            borderRadius: '20px',
            border: '4px solid rgba(89, 0, 255, 0.616)',
    };

    const buttonStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    };
    return (
        <Card style={cardStyle} className='mx-2 mt-4'>
            <Card.Img variant="top" src={item.image} style={{ height: '70%' }} />
            <Card.Body style={{ height: '10%' }}>
                <Card.Title>{item.title}</Card.Title>
                <div style={buttonStyle}>
                    <Link to={`/detalle/${item.id}`}>
                        <Button variant="success" >Ver detalles</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}
CardItem.propTypes = {
    item: PropTypes.object.isRequired, 
};

export default CardItem;
