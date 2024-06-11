import React, { useState, useEffect } from 'react';
import * as C from "./style";

interface CartProps {
    isVisible: boolean;
    onClose: () => void;
    cartItems?: Product[];
    onRemoveItem: (id: number) => void;
    onUpdateQuantity: (id: number, quantity: number) => void;
}
interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const Cart: React.FC<CartProps> = ({ isVisible, onClose, cartItems, onRemoveItem, onUpdateQuantity }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    
    let newTotal = 0;
    cartItems?.forEach(item => {
      const quantity = quantities[item.id] || 0;
      newTotal += item.price * quantity;
    });
    setTotal(newTotal);
  }, [cartItems, quantities]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities({ ...quantities, [id]: quantity });
    onUpdateQuantity(id, quantity);
  };

  return (
    <C.Container isVisible={isVisible}>
      <div className="titulo">
        <C.Title>Carrinho de compras</C.Title>
      </div>

      <div className="btn">
        <C.CloseButton onClick={onClose}>X</C.CloseButton>
      </div>

      <div className='totals'>
        <p className='total1'>Total:</p>
        <p className='total'>R${total.toFixed(0)}</p>
      </div>
      
      <button className='comprar'>
        Comprar
      </button>

      <div className='itens' style={{ position: 'absolute', top: 220, bottom: 0, left:-130, right: 0, overflowY: 'hidden', width:'800px' }}>
        <ul style={{ maxHeight: 'calc(100% - 100px)', overflowX:'hidden'}}>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map(item => (
              <li key={item.id}>
                <img src={item.photo}/>
                <p className='name'>{item.name}</p>
                <div className="quantity-controls">
                  <button className='btn1' onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 0) + 1)}>+</button>
                  <input type="number" value={quantities[item.id] || 0} min={0} onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))} />
                  <button className='btn2'  onClick={() => handleQuantityChange(item.id, Math.max(0, (quantities[item.id] || 1) - 1))}>-</button>
                </div>
                <p className='preço'>R${item.price}</p>
                <button onClick={() => onRemoveItem(item.id)}>X</button>
              </li>
            ))
          ) : (
            <p className='vazio'>O carrinho está vazio.</p>
          )}
        </ul>
      </div>
    </C.Container>
  );
};

export default Cart;
