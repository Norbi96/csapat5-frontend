import './Filter.css';
import { useSearchParams } from 'react-router-dom';

export default function Search({ price = false, date = false, name = true, userId = false }) {
  const [usp, setUsp] = useSearchParams();

  function handleSearch(e) {
    e.preventDefault();
    usp.set('search', e.target.elements.search.value);
    setUsp(usp);
  }
  function handleChangeSearch(e) {
    usp.set('search', e.target.value);

    if (e.target.value === '') usp.delete('search');
    setUsp(usp);
  }
  function handleSort(e) {
    e.preventDefault();
    const [orderBy, sort] = e.target.value.split('_');
    usp.set('orderBy', orderBy);
    usp.set('sort', sort);
    if (!orderBy) usp.delete('orderBy');
    if (!sort) usp.delete('sort');
    setUsp(usp);
  }
  return (
    <div className="filters">
      <div className="search-box">
        <form onSubmit={handleSearch}>
          <button type="button" className="btn-search">
            <span className="material-symbols-outlined">search</span>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Keresés..."
            onChange={handleChangeSearch}
          />
        </form>
      </div>
      <div className="select">
        <select defaultValue="" name="filter" onChange={handleSort}>
          <option value="">Alapértelmezett</option>
          {price && (
            <>
              <option value="price_asc">Ár növekvő</option>
              <option value="price_desc">Ár csökkenő</option>
            </>
          )}
          {date && (
            <>
              <option value="date_asc">Dátum növekvő</option>
              <option value="date_desc">Dátum csökkenő</option>
            </>
          )}
          {name && (
            <>
              <option value="name_asc">Név (A-Z)</option>
              <option value="name_desc">Név (Z-A)</option>
            </>
          )}
          {userId && (
            <>
              <option value="id_asc">Felhasználó ID (A-Z)</option>
              <option value="id_desc">Felhasználó ID (Z-A)</option>
            </>
          )}
        </select>
      </div>
    </div>
  );
}
