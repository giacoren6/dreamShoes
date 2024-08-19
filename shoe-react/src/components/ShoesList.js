import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShoesList() {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        try {
            axios.get('http://localhost:3000/api/shoes')
                .then((response) => {
                    setShoes(response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } catch (error) {
            console.error('There was an error!', error);
        }
    }, []);

    return (
        <div>
            <h1>Shoes Store</h1>
            <ul>
                {shoes.map((shoe) => (
                    <li key={shoe.id}>{shoe.brand} - {shoe.model}
                    <h2>{shoe.name} by {shoe.brand}</h2>
                    <p>Size: {shoe.size}</p>
                    <p>Price: £ {shoe.price}</p>
                    <p>{shoe.description}</p>

                    <imp src={shoe.image_url} alt={shoe.namem} 
                    syle={{ with: '100px'}}/>

                    
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoesList;
