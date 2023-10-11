import React, { useEffect, useState } from 'react';
import './Categories.css';
import { useSearchParams } from 'react-router-dom';
import { findAllCategory } from '../../services/category_crud';
import CategoryItem from './CategoryItem';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [usp, setUsp] = useSearchParams();

  useEffect(() => {
    findAllCategory(setCategories);
  }, []);

  function handleShowAllCategory() {
    usp.delete('categoryId');
    setUsp(usp);
  }
  return (
    <div className="grid">
      <fieldset>
        <label className="card">
          <input
            className="card__input"
            type="radio"
            checked={!usp.get('categoryId')}
            onChange={() => handleShowAllCategory()}
          />
          <div className="card__body">
            <div className="card__body-cover">
              <img
                className="card__body-cover-image"
                src="https://provinceofcanada.com/cdn/shop/files/Wide-Store-Image_grande.jpg?v=1667404280"
              />
              <span className="card__body-cover-checkbox">
                <svg className="card__body-cover-checkbox--svg" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1" />
                </svg>
              </span>
            </div>
            <header className="card__body-header">
              <h2 className="card__body-header-title">Összes kategória</h2>
            </header>
          </div>
        </label>
        {categories?.categories?.map?.((category) => (
          <CategoryItem
            category={category}
            key={category.id}
            handleShowAllCategory={handleShowAllCategory}
          />
        ))}
      </fieldset>
    </div>
  );
}
