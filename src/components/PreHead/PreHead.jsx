import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PreHead.css';
import Header from '../Header/Header';
import { API_URL } from '../../constants';

export default function PreHead() {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <>
      <div className="head-left">
        <Header />
      </div>
      <div className="head-right">
        {user ? (
          <span>
            <div className="mobile-menu" onClick={handleMobileMenu}>
              <span className="material-symbols-outlined">menu</span>
            </div>
            {isMobileMenuOpen && (
              <div className="mobile-menu-open">
                <div className="menu-open">
                  <button type="button" onClick={handleMobileMenu}>
                    X
                  </button>
                  <NavLink
                    to="/"
                    id="menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    Termékek
                  </NavLink>
                  {user?.isAdmin === 1 && (
                    <NavLink to="/admin" id="menu-btn">
                      Admin
                    </NavLink>
                  )}
                </div>
              </div>
            )}
            <Link to="/cart" className="loginfield">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
            <Link to="/profile" className="loginfield">
              <img src={`${API_URL}/${user.path}`} alt={`${user.fullName} profilképe`} />
            </Link>
            <button type="button" onClick={() => logout()} className="loginfield">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </span>
        ) : (
          <span>
            <Link to="/cart" className="loginfield">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
            <Link to="/register" className="loginfield">
              Regisztráció
            </Link>
            <Link to="/login" className="loginfield">
              Bejelentkezés
            </Link>
          </span>
        )}
      </div>
    </>
  );
}
