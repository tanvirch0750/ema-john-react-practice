import React from 'react';
import './OrderSummary.css';

const OrderSummary = () => {
   return (
      <aside className="product-summary">
        <h2>Order Summary</h2>
        <div className="summary-details">
          <p>Selected Items: 6</p>
          <p>Total Price: $1146</p>
          <p>Total Shipping Charge: $5</p>
          <p>Tax: $114</p>
          <h3>Grand Total: $1559</h3>
        </div>
        <div className="order-summary__buttons">
          <button className="btn clear-cart-btn">
            <p>Clear Cart</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          <button className="btn review-btn">
            <p>Review Order</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </aside>
   );
};

export default OrderSummary;