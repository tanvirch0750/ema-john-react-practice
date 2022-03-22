import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({products, handleAddToCart}) => {
   return (
      <section className="products-content">
         {
            products.map(product => <Product key={product.id} product = {product} handleAddToCart={handleAddToCart}/>)
         }
      </section>
   );
};

export default Products;