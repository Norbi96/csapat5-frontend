import { useContext, useEffect, useState } from 'react';
import './Sort.css';
import { useSearchParams } from 'react-router-dom';
import { findAllCategory } from '../../services/category_crud';

export default function Sort() {
  const [usp, setUsp] = useSearchParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    findAllCategory(setCategories);
  }, []);
  function handleFilter(e) {
    e.preventDefault();
    console.log(e);
    // const formData = new FormData(e.target);
    // const [orderBy, sort] = formData.get('filter').split('_');
    // usp.set('orderBy', orderBy);
    // usp.set('sort', sort);
    // if (!orderBy) usp.delete('orderBy');
    // if (!sort) usp.delete('sort');
    // setUsp(usp);
  }
  return (
    <div className="sort">
      <h4>Rendezés</h4>
      <hr />
      <form onSubmit={handleFilter}>
        <div className="box">
          <select defaultValue="" name="filter">
            <option value="">Alapértelmezett</option>
            <option value="price_asc">Ár szerint növekvő</option>
            <option value="price_desc">Ár szerint csökkenő</option>
            <option value="name_asc">Név szerint (A-Z)</option>
            <option value="name_desc">Név szerint (Z-A)</option>
          </select>
          <button type="submit" id="primary-btn">
            Szűrés
          </button>
        </div>
      </form>
    </div>
  );
}
