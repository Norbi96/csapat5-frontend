import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import './CategoryItem.css';

export default function CategoryItem({ category }) {
  const [usp, setUsp] = useSearchParams();

  function handleChecked(id) {
    usp.set('categoryId', id);
    setUsp(usp);
  }

  return (
    <label className="card">
      <input
        className="card__input"
        type="checkbox"
        checked={Number(usp.get('categoryId')) === category.id}
        onChange={() => handleChecked(category.id)}
      />
      <div className="card__body">
        <div className="card__body-cover">
          <img
            className="card__body-cover-image"
            src={
              category.imgPath
                ? `${API_URL}/${category.imgPath}`
                : 'https://provinceofcanada.com/cdn/shop/files/Wide-Store-Image_grande.jpg?v=1667404280'
            }
          />
          <span className="card__body-cover-checkbox">
            <svg className="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1" />
            </svg>
          </span>
        </div>
        <header className="card__body-header">
          <h2 className="card__body-header-title">{category.name}</h2>
        </header>
      </div>
    </label>
  );
}
