import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ShoesList() {
    const [shoes, setShoes] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/shoes/')
            .then(Response => {
                setShoes(Response.data);
            })
            .catch(error => {
                console.log.error('the was an error fetchig the shoes', error);
            });
    }, []);

    return (
        <div>
            <h1>Shoe Store</h1>
            <ul>
                {shoes.map(shoe => (
                    <li key={shoe.id}>{shoe.name}
                        <h2>{shoe.name}by
                        </h2>
                        {shoe.brand}
                        <p>price £ {shoe.price}
                        </p>
                        <p>{shoe.size}
                        </p>
                        <p>{shoe.descriptions}</p>
                        <img src={shoe.image_url} alt={shoe.name}
                        style={{ width: '100px', height: '100px' }} />


                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ShoesList;