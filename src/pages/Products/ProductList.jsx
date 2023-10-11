import React from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { addToCart } from '../../services/cartServices';
import { API_URL } from '../../constants';

export default function ProductList({ product }) {
  const { user } = useAuth();
  function handleAddToCart(productId) {
    const data = {
      productId: Number(productId),
      quantity: 1,
    };
    addToCart(data)
      .then(() => {
        toast.success('A termék a kosárba került');
      })
      .catch(() => toast.warning('Ez a termék már a kosaradban van!'));
  }
  return (
    <div key={product.id} className="product">
      <img src={`${API_URL}/${product.thumbnailUrl}`} alt={product.name} />
      <div className="product-desc">
        <section>
          <h2 className="product-title descript">{product.name}</h2>
          <p>{product.price} Ft</p>
        </section>
        <section className="product-btns">
          <Link id="product-btns-details" to={`/products/${product.id}`}>
            <span className="material-symbols-outlined">info</span>
          </Link>
          <button type="submit" id="product-btns-add" onClick={() => handleAddToCart(product.id)}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </section>
      </div>
    </div>
  );
}
