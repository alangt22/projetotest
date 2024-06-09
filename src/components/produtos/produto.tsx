import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../cart/cart';

interface Product {
  id: number;
  photo: string;
  name: string;
  price: number;
  description: string;
}

const Produto: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      setIsScrollingDown(prevScrollTop => scrollTop > prevScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const adicionarAoCarrinho = (produto: Product) => {
    setCartItems([...cartItems, produto]);
  };

  const abrirCarrinho = () => {
    setIsCartVisible(true);
  };

  const fecharCarrinho = () => {
    setIsCartVisible(false);
  };

  const removerItemDoCarrinho = (id: number) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button style={{ position:'fixed', top: isScrollingDown ? '-50px' : '20px', right: '140px', width: '65px', 
        height: '35px', fontSize: '15px', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', 
        backgroundColor: '#ffffff', border: '1px solid #000000', borderRadius: '5px', padding: '5px', cursor: 'pointer' }}
         onClick={abrirCarrinho}> 
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{cartItems.length}</span>
      </button>

      <Cart isVisible={isCartVisible} onClose={fecharCarrinho} cartItems={cartItems} onRemoveItem={removerItemDoCarrinho} />

      <C.ProductList>
        {products.map(product => (
          <C.ProductCard key={product.id}>
            <C.ProductImage src={product.photo} alt={product.name} />
            <C.ProductDetails>
              <C.ProductName>{product.name}</C.ProductName>
              <C.ProductPrice>R${(Number(product.price) || 0).toFixed()}</C.ProductPrice>
            </C.ProductDetails>
            <C.PoductDescription>{product.description}</C.PoductDescription>
            <C.AddToCartButton onClick={() => adicionarAoCarrinho(product)}>
              <FontAwesomeIcon icon={faShoppingBag} />
              Comprar
            </C.AddToCartButton>
          </C.ProductCard>
        ))}
      </C.ProductList>
    </div>
  );
};

export default Produto;
