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
       <div className="header-data">
           <span>${totalCartAmount()}</span>
           <span>{totalCartCount} Items</span>
       </div>
       <button className="btn" onClick={handleCartClick}>
           <img className="downward-arrow" src={require('./../assets/downward-arrow.png')} alt=""/>
           <img className="is-cart" src={require("./../assets/cart.png")} alt=""/>
        </button>       
    </header> 
    );
}

export default Header;