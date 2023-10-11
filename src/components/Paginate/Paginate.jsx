import './paginate.css';
import { Link, useSearchParams } from 'react-router-dom';

export default function Paginate(props) {
  const [usp, setUsp] = useSearchParams();

  const totalItems = props.total;

  const itemsPerPage = Number(usp.get('perPage') || 10);

  let totalPages = Math.ceil(totalItems / itemsPerPage);
  totalPages = Number.isFinite(totalPages) ? totalPages : 0;

  function handlePageChange(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
    }
    usp.set('page', newPage);
    setUsp(usp);
  }

  function renderPaginationItems() {
    const paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <li key={i} onClick={() => handlePageChange(i)}>
          <span>{i}</span>
        </li>,
      );
    }

    return paginationItems;
  }

  return (
    <div className="pagination">
      <ul>{renderPaginationItems()}</ul>
    </div>
  );
}
