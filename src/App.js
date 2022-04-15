import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/Signup/Signup";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/Not-Found/NotFound";
import OrderReviewContainer from "./components/Order-Review-Container/OrderReviewContainer";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ShopContainer from "./components/Shop-Container/ShopContainer";
import useCart from "./Hooks/useCart";
import useProducts from "./Hooks/useProducts";
import { addToDb, deleteShoppingCart, removeFromDb } from "./utilities/fakedb";

function App() {
  const [products] = useProducts();
  const [cart, setCart] = useCart();

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  const handleClearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  const handleDeleteSingleProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);

    removeFromDb(id);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="shop"
            element={
              <ShopContainer
                products={products}
                handleAddToCart={handleAddToCart}
                cart={cart}
                handleClearCart={handleClearCart}
              />
            }
          />
          <Route
            path="orders-review"
            element={
              <OrderReviewContainer
                cart={cart}
                handleClearCart={handleClearCart}
                handleDeleteSingleProduct={handleDeleteSingleProduct}
              />
            }
          />
          <Route
            path="checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
