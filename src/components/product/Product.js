import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;

//   const{handleAddtoCart}=props;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button className='btn-cart' onClick={()=>props.handleAddtoCart(props.product)}>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
    </div>
  );
};

export default Product;
