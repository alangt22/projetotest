
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
        <Cart isVisible={false} onClose={function (): void {
          throw new Error("Function not implemented.");
        } } onRemoveItem={function (_id: number): void {
          throw new Error("Function not implemented.");
        } } onUpdateQuantity={function (_id: number, _quantity: number): void {
          throw new Error("Function not implemented.");
        } } />

      </>
    )
  }
  
  export default Home
  