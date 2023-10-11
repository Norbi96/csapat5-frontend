import '../css/AdminDelModContainer.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateProduct } from '../../../services/products_crud';
import { findAllCategory } from '../../../services/category_crud';

export default function ModifyProducts() {
  const { id } = useParams();
  const [categories, setCategories] = useState();
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    categoryId: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, {
      name: newProduct.name,
      price: newProduct.price,
      categoryId: newProduct.categoryId,
    })
      .then(() => {
        navigate('/admin/products');
        toast.success('Sikeres módosítás!');
      })
      .catch(() => toast.error('Sikertelen módosítás'));
    setNewProduct({
      name: '',
      price: '',
      categoryId: '',
    });
    navigate('/admin/products');
  };

  const handleNameChange = (e) => {
    setNewProduct({
      ...newProduct,
      name: e.target.value,
    });
  };

  const handlePriceChange = (e) => {
    setNewProduct({
      ...newProduct,
      price: e.target.value,
    });
  };

  useEffect(() => {
    findAllCategory(setCategories);
  }, []);

  return (
    <div className="admin-delmod-container">
      <h2>Termék módosítása</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newProductName">
          <p>Kategória</p>
          <select
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, categoryId: Number(e.target.value) }))
            }
          >
            {categories?.categories?.map?.((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="newProductName">
          <p>Új név</p>
          <input
            type="text"
            id="newProductName"
            value={newProduct.name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="newProductPrice">
          <p>Új ár</p>
          <input
            type="text"
            id="newProductPrice"
            value={newProduct.price}
            onChange={handlePriceChange}
          />
        </label>
        <button type="submit">Küldés</button>
      </form>
    </div>
  );
}
