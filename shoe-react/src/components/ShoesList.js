import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';


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
                    <div className="header">
                        <h1>Dream Shoes</h1>
                    </div>

                    <div>
                        <video autoPlay muted loop id="myVideo">
                            <source src='components/media/shoes.mp4' type="video/mp4" />
                        </video>
                    </div>

                    <div className="description">
                        <p>At Dream Shoes we have a wide range of shoes for all tastes and occasions. From trainers to high heels, we have it all. Browse our collection below.</p>
                    </div>

                    <h2 className='collection'>Our collection of shoes</h2>

                    <ul>
                        {shoes.map((shoe) => (
                            <li key={shoe.id}>{shoe.brand} - {shoe.model}
                                <h2>{shoe.name} by {shoe.brand}</h2>
                                <p>Size: {shoe.size}</p>
                                <p>Price: £ {shoe.price}</p>
                                <p>{shoe.description}</p>

                                <imp src={shoe.image_url} alt={shoe.namem}
                                    syle={{ with: '100px' }} />
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }

export default ShoesList;
