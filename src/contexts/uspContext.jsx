import { createContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const uspContext = createContext({});

export function SearchProvider({ children }) {
  const [usp, setUsp] = useSearchParams();

  useEffect(() => {}, [usp]);

  return <uspContext.Provider value={[usp, setUsp]}>{children}</uspContext.Provider>;
}
