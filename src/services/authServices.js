import jwtDecode from 'jwt-decode';
import publicApi from '../api/publicApi';

const login = (email, password) => {
  const data = { email, password };
  return publicApi.post('/auth/login', data);
};
const register = (data) => {
  return publicApi.post('/auth/register', data);
};

export const createAuthInit = () => {
  const token = localStorage.getItem('access_token');
  try {
    const user = jwtDecode(token);
    return { accessToken: token, user };
  } catch {
    return { accessToken: null };
  }
};

export default {
  login,
  register,
};
