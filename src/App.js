import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import OrderSummary from './components/Order-Summary/OrderSummary';
import Products from './components/Products/Products';
import { addToDb, getStoredCart } from './utilities/fakedb';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
 
  
  useEffect(()=> {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
     .then(products => products.json())
     .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    
    setCart(savedCart)
  },[products])

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if(!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }
    setCart(newCart);
    addToDb(selectedProduct.id)
  }

  return (
    <div className="container">
      <Header />
      <Products products={products} handleAddToCart={handleAddToCart}/>
      <OrderSummary cart={cart}/>
    </div>
  );
}

export default App;
