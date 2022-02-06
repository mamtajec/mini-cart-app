import { useContext } from "react";
import { ProductContext } from "../App";
import MiniCartProductTile from "./miniCartProductTile";

function MiniCartMenu() {

    const {productsList, cartCountData} = useContext(ProductContext)
    const getProductCount = () => {
        return Object.values(cartCountData).reduce((a, b) => a + b);
    }

    return ( 
    <div className="mini-cart-container">
        {getProductCount() === 0 && <div className="empty">Hey! It feels so light in here. Let's add some items</div>}
        {productsList.map(product => 
        cartCountData[product.id] > 0 && <MiniCartProductTile product={product} key={product.id} />
        )}
    </div>
     );
}

export default MiniCartMenu;