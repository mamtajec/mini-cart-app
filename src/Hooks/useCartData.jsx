function useCartData(productData) {

    let cartValue = {}

        if(!localStorage.getItem("cartData")){
            productData.forEach( product => {
                cartValue[product.id] = 1
            })
            cartValue && localStorage.setItem("cartData", JSON.stringify(cartValue))
        } 
        else {
            cartValue = JSON.parse(localStorage.getItem("cartData"))
        }
  
    return cartValue

}

export default useCartData;