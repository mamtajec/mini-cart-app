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
        <div className="product-item" id={`mini-${product.id}`} tabIndex="0">
        <div className="close">
            <button className="btn is-close" onClick={removeProduct}>
                <span className="is-sr-only">remove product</span>
                <img src={require("./../assets/close.png")}/>
            </button>
        </div>
        <div className="product-details">
            <span className="product-title">{product.title}</span>
            <span className="product-price">{product.currency}{totalProductAmount}</span>
        </div>
        <div className="product-quantity">Qty {cartCountData[product.id]}</div>
        </div>
     );
}

export default MiniCartProductTile;