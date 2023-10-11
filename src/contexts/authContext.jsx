import { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { createAuthInit } from '../services/authServices';

export const authContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(createAuthInit());

  useEffect(() => {
    if (auth.accessToken) {
      const decoded = jwt_decode(auth.accessToken);
      setAuth((prev) => ({ ...prev, user: { ...decoded } }));
    }
  }, [auth.accessToken]);

  return <authContext.Provider value={[auth, setAuth]}>{children}</authContext.Provider>;
}
