import { useContext, useEffect } from "react";
import { ProductContext } from "../App";
import ProductTile from "./productTile";

function ProductGrid() {

    const { productsList } = useContext(ProductContext)

    useEffect(() => {
        
    }, []);

    return ( 
    <div className="product-container">
        {productsList.map(product => <ProductTile product={product} key={product.id}/>)}
    </div> );
}

export default ProductGrid;