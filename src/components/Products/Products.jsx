import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({products}) => {
   return (
      <section className="products-content">
         {
            products.map(product => <Product key={product.id} product = {product}/>)
         }
      </section>
   );
};

export default Products;