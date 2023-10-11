import { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findAllProducts } from '../services/products_crud';

export const productsContext = createContext({});

export function FilterProducts({ children }) {
  const [products, setProducts] = useState([]);
  const [usp, setUsp] = useSearchParams();

  useEffect(() => {
    findAllProducts(setProducts, usp.toString());
  }, [usp]);

  return (
    <productsContext.Provider value={[products, setProducts]}>{children}</productsContext.Provider>
  );
}
