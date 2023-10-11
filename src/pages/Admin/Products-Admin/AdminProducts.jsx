import '../css/AllAdminItem.css';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteProduct, findAllProducts } from '../../../services/products_crud';
import Search from '../../../components/Filter/Filter';
import Paginate from '../../../components/Paginate/Paginate';

export default function AdminProducts() {
  const [usp, setUsp] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = Number(searchParams.get('perPage') || 10);

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId)
        .then(() => toast.success('Sikeres törlés!'))
        .catch(() => toast.error('Sikertelen törlés'));
      findAllProducts(setProducts, usp.toString());
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    findAllProducts(setProducts, usp.toString());
  }, [usp]);

  return (
    <div className="admin-item-container">
      <Search price id="adminSeach" />
      <ul className="items-list">
        <li>
          <span>Termék neve</span>
          <span>Termék ára</span>
          <span>Módosítás</span>
          <span>Törlés</span>
        </li>
        {products?.products?.map?.((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>
              <Link to={`/admin/products/${product.id}`}>Módosítás</Link>
            </span>
            <span>
              {product.desc}{' '}
              <button type="button" onClick={() => handleDeleteProduct(product.id)} id="delete-btn">
                Törlés
              </button>
            </span>
          </li>
        ))}
      </ul>
      <Paginate total={products?.total} />
    </div>
  );
}
