import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({ item }) => {

    return (
        <div>
            <h5>{item.title}</h5>
            <img src={item.image} />
            <p>
                description: {item.description}
            </p>
            <p>
                Price: {item.price}
            </p>
            <p>
                category:  {item.category}
            </p>
            <Counter />
        </div>
    )
}

export default ItemDetail