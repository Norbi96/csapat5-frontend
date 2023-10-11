import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import { findMyCart } from '../services/cartServices';

export const cartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.id) {
      findMyCart(user.id, setCart);
    }
  }, [user]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <cartContext.Provider value={{ setItemsInCart, itemsInCart, cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}
