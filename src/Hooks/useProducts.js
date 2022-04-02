import { useEffect, useState } from "react";

const useProducts = () => {
   const [products, setProducts] = useState([]);

   useEffect(()=> {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
       .then(products => products.json())
       .then(data => setProducts(data))
    }, []);

    return [products, setProducts]
}

export default useProducts;