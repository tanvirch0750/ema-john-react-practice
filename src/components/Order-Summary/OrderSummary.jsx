import React from 'react';
import { FaArrowRight, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = ({cart, handleClearCart, customClass}) => {
   const totalPrice = cart.reduce((acc, currentValue) => acc + currentValue.price * currentValue.quantity, 0);
   const shippingPrice = cart.reduce((acc, currentValue) => acc + currentValue.shipping, 0);
   const quantity = cart.reduce((acc, currentValue) => acc + currentValue.quantity , 0);
  
   const tax = totalPrice * 0.1;
   const grandTotal = totalPrice + shippingPrice + tax;

  const navigate = useNavigate()

   return (
      <aside className={customClass ? 'order-review-container product-summary' : 'product-summary'}>
        <h2>Order Summary</h2>
        <div className="summary-details">
          <p>Selected Items: {quantity}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: ${shippingPrice}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
        <div className="order-summary__buttons">
          <button className="btn clear-cart-btn" onClick={handleClearCart}>
            <p>Clear Cart</p>
            <FaTrashAlt />
          </button>
          <button className="btn review-btn" onClick={() => navigate(`${customClass ? '/checkout' : '/orders-review'}`)}>
            <p>{customClass ? 'Proceed Checkout' : 'Order Review'}</p>
            <FaArrowRight />
          </button>
        </div>
      </aside>
   );
};

export default OrderSummary;