import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import {addToDb, getStoredCart} from '../../utilities/fakedb';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart]=useState([]);

  useEffect(() => {
    // console.log("products load before fetch");
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log("Product Loaded");
      });
  }, []);

useEffect(()=>{
  let savedCart=[];
  const storedCart=getStoredCart();
  for(const id in storedCart){
    const addedProduct=products.find(product=>product.id===id);
    if(addedProduct){
      const quantity=storedCart[id];
      addedProduct.quantity=quantity;
      savedCart.push(addedProduct);
    }
  }
  setCart(savedCart);
},[products])



  const handleAddtoCart=(selectedProduct)=>{
    console.log(selectedProduct);
    let newCart=[];
    const exists=cart.find(product=>product.id===selectedProduct.id);
    if(!exists){
      selectedProduct.quantity=1;
      newCart=[...cart,selectedProduct];
    }
    else{
      const rest=cart.filter(product=>product.id!==selectedProduct.id);
      exists.quantity=exists.quantity + 1;
      newCart=[...rest,exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
    // addToDb(product.id)
  }


  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>
        ))}
      </div>
      <div className="cart-container">
            <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
