import React from "react";
import OrderReview from "../Order-Review/OrderReview";
import OrderSummary from "../Order-Summary/OrderSummary";

const OrderReviewContainer = ({
  cart,
  handleClearCart,
  handleDeleteSingleProduct,
}) => {
  return (
    <>
      <OrderReview
        cart={cart}
        handleDeleteSingleProduct={handleDeleteSingleProduct}
      />
      <OrderSummary
        cart={cart}
        customClass="true"
        handleClearCart={handleClearCart}
      />
    </>
  );
};

export default OrderReviewContainer;
