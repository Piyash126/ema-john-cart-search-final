import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddtoCart=(product)=>{
    console.log(product);
    const newCart=[...cart,product];
    setCart(newCart);
  }


  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h1>Order Summary Here</h1>
        <p>Selected Items:{cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
