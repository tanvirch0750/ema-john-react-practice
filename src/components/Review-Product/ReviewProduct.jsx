import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './ReviewProduct.css';

const ReviewProduct = ({cart, handleDeleteSingleProduct}) => {
   const {id, img, name, price, shipping} = cart;
   return (
      <div className='review-product'>
         <div className="content-box">
            
               <img src={img} alt={name} />
               <div className='content-details'>
                 <h2>{name}</h2>
                 <p>Price: <span>{price}</span></p>
                 <p>Shipping Charge: <span>{shipping}</span></p>
               </div>
           
         </div>
         <div className="remove-box">
            <button onClick={() => handleDeleteSingleProduct(id)}>
               <FaTrashAlt />
            </button>
         </div>
      </div>
   );
};

export default ReviewProduct;