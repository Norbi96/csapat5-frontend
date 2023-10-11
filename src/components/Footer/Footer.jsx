import React, { useContext } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';

/* import { scrollContext } from "../../contexts/scrollContext";
 */
export default function Footer() {
  // const { executeScroll } = useContext(scrollContext)

  const [auth] = useContext(authContext);

  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="social-icon__item">
          <Link className="social-icon__link" to="#">
            <ion-icon name="logo-facebook" />
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="#">
            <ion-icon name="logo-twitter" />
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="#">
            <ion-icon name="logo-linkedin" />
          </Link>
        </li>
        <li className="social-icon__item">
          <Link className="social-icon__link" to="#">
            <ion-icon name="logo-instagram" />
          </Link>
        </li>
      </ul>
      <ul className="menu">
        {auth?.user ? (
          <>
            <li className="menu__item">
              <Link to="/profile" className="menu__link">
                Profil
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/cart" className="menu__link">
                Kosár
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="menu__item">
              <Link to="/register" className="menu__link">
                Regisztráció
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/login" className="menu__link">
                Bejelentkezés
              </Link>
            </li>
          </>
        )}
      </ul>
      <p>&copy;2023</p>
    </footer>
  );
}
