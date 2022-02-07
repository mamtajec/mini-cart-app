import { useContext } from "react";
import { ProductContext } from "../App";

function Header() {

    const { productsList, showMiniCart, setshowMiniCart, cartCountData } = useContext(ProductContext);
    const totalCartCount = cartCountData && Object.values(cartCountData).reduce((a, b) => a + b);

    const totalCartAmount = () => {
        let sum = 0
        cartCountData && productsList && Object.keys(cartCountData).map((key) => {
            sum += parseInt((productsList.filter( prod => prod.id ===key)[0].price)) * parseInt(cartCountData[key])
        })
        return sum
    } 

    const handleCartClick = () => {
        setshowMiniCart(!showMiniCart)
    }

    return ( 
    <header className="header">
        <h1 className="is-sr-only">Mini cart page</h1>
       <div className="header-data">
           <span>${totalCartAmount()}</span>
           <span>{totalCartCount} Items</span>
       </div>
       <button className="btn is-cart" onClick={handleCartClick} aria-haspopup="true" aria-expanded={showMiniCart ? true : false}>
           <span className="is-sr-only">mini cart</span>
           <img src={require('./../assets/downward-arrow.png')} alt=""/>
           <img src={require("./../assets/cart.png")} alt=""/>
        </button>       
    </header> 
    );
}

export default Header;