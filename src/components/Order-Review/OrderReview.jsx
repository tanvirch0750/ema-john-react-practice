import React from 'react';
import useCart from '../../Hooks/useCart';
import './OrderReview.css';

const OrderReview = () => {
   const [cart] = useCart();
   return (
      <div className='order-review'>
         Orders
      </div>
   );
};

export default OrderReview;