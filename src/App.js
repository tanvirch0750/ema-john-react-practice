import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import OrderSummary from './components/Order-Summary/OrderSummary';
import Products from './components/Products/Products';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(()=> {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
     .then(products => products.json())
     .then(data => setProducts(data))
  }, [])

  return (
    <div className="container">
      <Header />
      <Products products={products}/>
      <OrderSummary />
    </div>
  );
}

export default App;
