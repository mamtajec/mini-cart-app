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
        <div className="product-item" id={product.id} tabIndex="0">
            <img className="product-image" src={require(`./../assets${product.image}`)} alt=""/>
            <div className="product-details">
                <span className="product-title">{product.title}</span>
                <span className="product-desc">{product.desc}</span>
            </div>
            <div className="product-quantity">
                <button className="btn is-delete" onClick={handleDecrement} disabled={!cartCountData[product.id]}>
                    <span className="is-sr-only">decrease product count</span>
                    <img src={require('./../assets/delete.png')} alt=""/>
                </button>
                <div className="product-count">{cartCountData && cartCountData[product.id]}</div>
                <button className="btn is-add" onClick={handleIncrement}>
                    <span className="is-sr-only">increase product count</span>
                    <img src={require('./../assets/close.png')} alt=""/>
                </button>
                </div>
            <p className="product-price">{product.currency}{product.price}</p>
        </div>
        </>
     );
}

export default ProductTile;
