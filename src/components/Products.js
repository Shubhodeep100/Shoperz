import '../App.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = ()=> {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{

        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products",
        })
        .then ((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((e) => console.log(e))
        .finally(()=> setLoading(false));
    }, []);
    
    return (
        <div className='product-container'>
            {loading && (

            <div>
                {" "}
                <h1>Loading...</h1>
            </div>
            )}
            {data.map((product) => (
                <div key={product.id} className='card'>
                    <div><img src={product.image} alt="#" style={{ width: 230, height: 240 + 'px', borderRadius: 1 + 'rem' }} /></div>
                    <div className='card-description'>
                        <h3>{product.title}</h3>
                        <h5>{`Price: ${product.price}`}</h5>
                        <h3>{`Category: ${product.category}`}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Products;