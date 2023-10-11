import { useSearchParams } from 'react-router-dom';

export default function PagePer() {
  const [usp, setUsp] = useSearchParams();

  function handleSort(e) {
    e.preventDefault();
    const perPage = e.target.value;
    usp.set('perPage', perPage);
    usp.set('page', 1);
    if (!perPage) usp.delete('perPage');
    setUsp(usp);
  }
  return (
    <div className="select">
      <select defaultValue={10} name="filter" onChange={handleSort}>
        <option value="5">5 Termék oldalanként</option>
        <option value="10">Alapértelmezett (10)</option>
        <option value="15">15 Termék oldalanként</option>
        <option value="20">20 Termék oldalanként</option>
        <option value="25">25 Termék oldalanként</option>
        <option value="30">30 Termék oldalanként</option>
      </select>
    </div>
  );
}
