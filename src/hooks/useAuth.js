import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../contexts/authContext';
import authServices from '../services/authServices';

export default function useAuth() {
  const [auth, setAuth] = useContext(authContext);
  const navigate = useNavigate();

  function login(email, password) {
    authServices
      .login(email, password)
      .then((res) => {
        setAuth((prev) => ({ ...prev, accessToken: res.data.accessToken }));
        localStorage.setItem('access_token', res.data.accessToken);
        toast.success('Sikeres bejelentkezés');
        navigate('/');
      })
      .catch(() => toast.error('Hibás felhasználónév/jelszó!'));
  }
  function logout() {
    localStorage.removeItem('access_token');
    setAuth({ accessToken: null });
    toast.success('Kijelentkezve');
    navigate('/');
  }
  function register(data) {
    authServices
      .register(data)
      .then(() => {
        toast.success('Sikeres regisztráció');
        navigate('/login');
      })
      .catch(() => toast.error('Hibás kitöltés!'));
  }
  return { ...auth, login, register, logout };
}
