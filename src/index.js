import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const staticData = {
  "products": [
    {
      "id": "123442",
      "title": "Product 1",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "image": "/product1.jpeg",
      "price": "20",
      "currency": "$"
    },
    {
      "id": "123443",
      "title": "Product 2",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "image": "/product2.jpeg",
      "price": "50",
      "currency": "$"
    }
  ]
}

async function getProductsFromApi() {
  fetch("http://dnc0cmt2n557n.cloudfront.net/products.json", { mode: 'no-cors'})
  .then(response => response.json())
  .then(data =>{
    renderComponents(data)
  })
  .catch(err => {    
    console.log(err)
    // rendering components using static data due to CORs error
    renderComponents()
  })
}

getProductsFromApi()
 
const renderComponents = ( data = staticData) => {
  window.products = data
  render(
    <React.StrictMode>
      <App productData={data.products}/>,
   </React.StrictMode>,
    document.getElementById('root')
  );

}

reportWebVitals();
