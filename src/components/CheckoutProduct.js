import React from 'react'
import "./CheckoutProduct.css";
import { FaDollarSign, FaStar } from "react-icons/fa";

function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className="checkoutProduct">
      <img class="checkoutProduct_image" src={image} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price"><small><FaDollarSign /></small><strong>{price}</strong></p>
        <p className="checkoutProduct_rating">
          {Array(rating).fill().map((_,i) => (<p><FaStar /></p>))}
        </p>
        <button>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
