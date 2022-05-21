import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { name, id, price } = props.product;
    return ( <
        div className = 'product' > {
            /* <h3>Products name:{props.product.name}</h3>
                        <h5>ID:{props.product.id}</h5>
                        <h5>Price:{props.product.price}</h5> */
        } <
        h3 > Products name: { name } < /h3> <
        h5 > ID: { id } < /h5> <
        h5 > Price: { price } < /h5> <
        /div>
    );
};

export default Product;