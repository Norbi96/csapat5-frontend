import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/AdminHeader.css';

export default function AdminHeader() {
  return (
    <nav role="navigation" className="primary-navigation">
      <ul>
        <li>
          <NavLink to="/admin">ADMIN</NavLink>
        </li>
        <li>
          <NavLink to="/admin/products">
            Termékek <span className="material-symbols-outlined">expand_more</span>
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="/admin/products/new">Új Termék</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/admin/category">
            Kategóriák <span className="material-symbols-outlined">expand_more</span>
          </NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="/admin/category/new">Új Kategória</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/admin/users">Felhasználók</NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders">Rendelések</NavLink>
        </li>
        <li>
          <NavLink to="/">Webshop</NavLink>
        </li>
      </ul>
    </nav>
  );
}
