import { useState } from "react";
import Global from "../styles/global";
import Cart from "./cart/cart";
import Footer from "./footer";
import Header from "./header/header";
import Produto from "./produtos/produto";



const Home = () => {

  
    return (
      <>
        
        <Header /> 
        <Produto />
        <Footer />       
        <Global />
        <Cart />

      </>
    )
  }
  
  export default Home
  