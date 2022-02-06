import { useContext } from "react";
import { ProductContext } from "../App";

function MiniCartProductTile(props) {

    const {product} = props
    const {cartCountData, setCartCountData } = useContext(ProductContext)
    const totalProductAmount = product.price *cartCountData[product.id]

    const removeProduct = () => {
        setCartCountData(prevValue => ({...prevValue, [product.id]: 0}))
    }

    return ( 
        <div className="product-item" tabIndex="0">
        <div className="close">
            <button className="btn" onClick={removeProduct}>
                <img src={require("./../assets/close.png")}/>
            </button>
        </div>
        <div className="item-details">
            <span className="product-title">{product.title}</span>
            <span className="item-price">{product.currency}{totalProductAmount}</span>
        </div>
        <div className="item-quantity">Qty {cartCountData[product.id]}</div>
        </div>
     );
}

export default MiniCartProductTile;