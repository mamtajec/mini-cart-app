import { useContext, useEffect } from "react";
import { ProductContext } from "../App";
import { select } from "../Utils/helpers";
import MiniCartProductTile from "./miniCartProductTile";

function MiniCartMenu() {

    const {productsList, cartCountData} = useContext(ProductContext)
    const getProductCount = () => {
        return Object.values(cartCountData).reduce((a, b) => a + b);
    }
    

    useEffect(() => {

        const focusableEl = getProductCount() ? '.product-item' : '.empty'
        select(focusableEl, '.mini-cart-container').focus()
        select('.product-container').setAttribute('aria-hidden', true)
        return () => {
            select('.btn', '.header').focus()
            select('.product-container').setAttribute('aria-hidden', false)
        }
    }, []);

    return ( 
        <div className="mini-cart-wrapper" role = "dialog" aria-modal="true">
            <div className="mini-cart-container">
                {getProductCount() === 0 && <div className="empty" tabIndex="0">Hey! It feels so light in here. Let's add some products.</div>}
                {productsList.map(product => 
                cartCountData[product.id] > 0 && <MiniCartProductTile product={product} key={product.id} />
                )}
            </div>
        </div>
     );
}

export default MiniCartMenu;