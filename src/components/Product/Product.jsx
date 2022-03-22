import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import './Product.css';

const Product = ({product, handleAddToCart}) => {
   
   const {img, name, price, seller, ratings} = product;
  
   return (
      <div className="product-card">
         <div className="product-card__img">
            <img src={img} alt={name} />
         </div>
         <div className="product-info">
            <div className="product-info__main">
               <h2>{name.length > 20 ? name.slice(0, 20) : name}</h2>
               <p>Price: ${price}</p>
            </div>
            <div className="product-info__secondary">
               <p><small>Manufacturer : {seller}</small></p>
               <p><small>Rating : {ratings}</small></p>
            </div>
         </div>
         <button onClick={() => handleAddToCart(product)} className="add-to-cart">
            <p>Add to cart</p>
            <FaCartPlus />
         </button>
      </div>
   );
};

export default Product;