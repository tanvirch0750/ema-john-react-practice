import React from 'react';
import OrderSummary from '../Order-Summary/OrderSummary';
import Products from '../Products/Products';

const ShopContainer = ({products, handleAddToCart, cart, handleClearCart}) => {
   return (
      <>
         <Products products={products} handleAddToCart={handleAddToCart}/>
         <OrderSummary cart={cart} handleClearCart={handleClearCart}/>
      </>
   );
};

export default ShopContainer;