import './App.css';
import Header from './components/Header/Header';
import OrderSummary from './components/Order-Summary/OrderSummary';
import Products from './components/Products/Products';
import useCart from './Hooks/useCart';
import useProducts from './Hooks/useProducts';
import { addToDb } from './utilities/fakedb';

function App() {
  const [products] = useProducts();
  const [cart, setCart] = useCart();


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
