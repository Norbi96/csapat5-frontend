import { Outlet } from 'react-router-dom';
import PreHead from '../PreHead/PreHead';
import './Layout.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../../contexts/authContext';
import Logo from '../Header/Logo';
import { SearchProvider } from '../../contexts/uspContext';
import { FilterProducts } from '../../contexts/productsContext';
import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import './Mobile.css';

export default function Layout() {
  return (
    <AuthProvider>
      <SearchProvider>
        <FilterProducts>
          <div className="wrapper">
            <div className="right">
              <div className="pre-head">
                <Logo />
                <PreHead />
              </div>
              <main>
                <Outlet />
              </main>
            </div>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Footer />
        </FilterProducts>
      </SearchProvider>
    </AuthProvider>
  );
}
