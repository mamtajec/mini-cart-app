import { createContext, useEffect, useState } from 'react';
import Header from './Components/header';
import MiniCartMenu from './Components/miniCartMenu';
import ProductGrid from './Components/productGrid';
import useCartData from './Hooks/useCartData';
import { select } from './Utils/helpers';

export const ProductContext = createContext({
  productsList: [],
  showMiniCart: false,
  setshowMiniCart: () => {},
  cartCountData: null,
  setCartCountData: () => {}

})


function App(props) {

  const { productData } = props
  const [showMiniCart, setshowMiniCart] = useState(false)
  const [cartCountData, setCartCountData] = useState(useCartData(productData))


  const productContextValue = {
    productsList: productData,
    showMiniCart: showMiniCart,
    setshowMiniCart: setshowMiniCart,
    cartCountData: cartCountData,
    setCartCountData: setCartCountData    

  }

  useEffect(() => {
    Object.values(cartCountData).reduce((a, b) => a + b) == 0 && setshowMiniCart(false)
    cartCountData && localStorage.setItem("cartData", JSON.stringify(cartCountData))
  }, [cartCountData]);

  useEffect(() => {
    select('.btn', '.header').focus()
  }, []);


  return (
    <ProductContext.Provider value={productContextValue}>
      <Header />
      <main className="content" id="main-content" role="main">
        <ProductGrid />
        { showMiniCart && <MiniCartMenu /> }
      </main>
    </ProductContext.Provider>
    
  );
}

export default App;
