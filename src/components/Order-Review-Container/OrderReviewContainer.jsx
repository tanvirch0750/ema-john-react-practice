import React from 'react';
import OrderReview from '../Order-Review/OrderReview';
import OrderSummary from '../Order-Summary/OrderSummary';

const OrderReviewContainer = ({cart}) => {
   return (
      <>
         <OrderReview />
         <OrderSummary cart={cart} customClass="true"/>
      </>
   );
};

export default OrderReviewContainer;