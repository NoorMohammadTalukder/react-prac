import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
        const [products, setProducts] = useState([]);

        useEffect(() => {
            fetch('data.json')
                .then(res => res.json())
                // .then(data=>console.log(data))
                .then(data => setProducts(data))
        }, [])
        return ( <
            div >
            <
            h1 > Welcome to our products system < /h1> <
            h2 > Total Products: { products.length } < /h2> {
                products.map(product => < Product key = { product.id }
                        product = { product } > < /Product>)
                    } <
                    /div>
            );
        };


        export default Products;