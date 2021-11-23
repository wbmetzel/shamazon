import React from "react";
import "./Product.css";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { useStateValue } from "../StateProvider";

function Product({id, title, image, price, rating}) {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    // push item into data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
