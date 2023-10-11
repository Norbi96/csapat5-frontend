import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Header.css';
import useAuth from '../../hooks/useAuth';

export default function Header() {
  const { user } = useAuth();
  return (
    <>
      <NavLink to="/" id="menu-btn">
        Termékek
      </NavLink>
      {user?.isAdmin === 1 && (
        <NavLink to="/admin" id="menu-btn">
          Admin
        </NavLink>
      )}
    </>
  );
}
