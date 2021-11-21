import React from "react";
import "./Product.css";
import { FaDollarSign, FaStar } from "react-icons/fa";

function Product({id, title, image, price, rating}) {
  return(
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small><FaDollarSign /></small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
            <p><FaStar /></p>
          ))}
        </div>
      </div>
      <img
        src={image}
        alt="product image"
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
