import '../css/AllAdminItem.css';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteCategory, findAllCategory } from '../../../services/category_crud';
import Paginate from '../../../components/Paginate/Paginate';
import Search from '../../../components/Filter/Filter';

export default function AdminCategories() {
  const [usp, setUsp] = useSearchParams();
  const [categories, setCategories] = useState([]);

  const itemsPerPage = Number(usp.get('perPage') || 10);

  const handleDeleteCategory = async (productId) => {
    try {
      await deleteCategory(productId)
        .then(() => toast.success('Sikeres törlés!'))
        .catch(() => toast.error('Sikertelen törlés'));
      findAllCategory(setCategories, usp.toString());
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    const page = usp.get('page');

    findAllCategory(setCategories, usp.toString());
  }, [usp]);

  return (
    <div className="admin-item-container">
      <Search />
      <ul className="items-list">
        <li>
          <span>Kategória neve</span>
          <span>ID</span>
          <span>Módosítás</span>
          <span>Törlés</span>
        </li>
        {categories?.categories?.map((category) => (
          <li key={category.id}>
            <span>{category.name}</span>
            <span>{category.id}</span>
            <span>
              <Link to={`/admin/category/${category.id}`}>Módosítás</Link>
            </span>
            <span>
              {category.desc}{' '}
              <button
                type="button"
                onClick={() => handleDeleteCategory(category.id)}
                id="delete-btn"
              >
                Törlés
              </button>
            </span>
          </li>
        ))}
      </ul>
      <Paginate total={categories?.total} itemsPerPage={itemsPerPage} />
    </div>
  );
}
