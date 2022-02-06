import { useContext } from 'react'
import { ProductContext } from '../App'

function ProductTile(props) {

    const { product } = props
    const {cartCountData, setCartCountData} = useContext(ProductContext)

    const handleIncrement = () => {
        const prevVal = cartCountData[product.id]
        setCartCountData( cartCountData => ({ ...cartCountData, [product.id]: prevVal+1 }))
    }

    const handleDecrement = () => {
        const prevVal = cartCountData[product.id]
        setCartCountData( cartCountData => ({ ...cartCountData, [product.id]: prevVal-1 }))
    }

    return ( 
        <>
        <div className="product-item" tabIndex="0">
            <img className="item-image" src={require(`./../assets${product.image}`)} alt=""/>
            <div className="item-details">
                <span className="product-title">{product.title}</span>
                <span className="product-desc">{product.desc}</span>
            </div>
            <div className="item-quantity">
                <button className="btn" onClick={handleDecrement} disabled={!cartCountData[product.id]}>
                    <img className="is-delete" src={require('./../assets/delete.png')} alt=""/>
                </button>
                <div className="item-count">{cartCountData && cartCountData[product.id]}</div>
                <button className="btn" onClick={handleIncrement}>
                    <img className="is-add" src={require('./../assets/close.png')} alt=""/>
                </button>
                </div>
            <p className="item-price">{product.currency}{product.price}</p>
        </div>
        </>
     );
}

export default ProductTile;
