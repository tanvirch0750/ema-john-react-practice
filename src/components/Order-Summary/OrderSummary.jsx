import React from 'react';
import { FaArrowRight, FaTrashAlt } from "react-icons/fa";
import './OrderSummary.css';

const OrderSummary = ({cart}) => {
   return (
      <aside className="product-summary">
        <h2>Order Summary</h2>
        <div className="summary-details">
          <p>Selected Items: {cart.length}</p>
          <p>Total Price: $1146</p>
          <p>Total Shipping Charge: $5</p>
          <p>Tax: $114</p>
          <h3>Grand Total: $1559</h3>
        </div>
        <div className="order-summary__buttons">
          <button className="btn clear-cart-btn">
            <p>Clear Cart</p>
            <FaTrashAlt />
          </button>
          <button className="btn review-btn">
            <p>Review Order</p>
            <FaArrowRight />
          </button>
        </div>
      </aside>
   );
};

export default OrderSummary;