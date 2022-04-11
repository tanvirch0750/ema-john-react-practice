import React from "react";
import ReviewProduct from "../Review-Product/ReviewProduct";
import "./OrderReview.css";

const OrderReview = ({ handleDeleteSingleProduct, cart }) => {
  return (
    <div className="order-review">
      {cart.length < 1 ? (
        <div>
          <h1>Please add some product to your cart</h1>
        </div>
      ) : (
        cart.map((c) => (
          <ReviewProduct
            key={c.id}
            cart={c}
            handleDeleteSingleProduct={handleDeleteSingleProduct}
          />
        ))
      )}
    </div>
  );
};

export default OrderReview;
