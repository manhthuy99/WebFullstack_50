import React from 'react';
import './ProductItem.css';

const ProductItem = (props) => {
    return (
        <div className='product-item'>
            <img src={props.img} alt='product'/>
            <div className='info-product'>
                <h2>{props.name}</h2>
                <div className='price'>{props.price}</div>
                <div className='discount'>{props.discount}</div>
            </div>
        </div>
    )
}

export default ProductItem
