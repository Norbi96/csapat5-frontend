import '../css/AdminDelModContainer.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { findAllCategory } from '../../../services/category_crud';
import { createProduct } from '../../../services/products_crud';

export default function AddNewProduct() {
  const [categories, setCategories] = useState([]);

  function handleCreatingProduct(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    createProduct(formData)
      .then(() => {
        toast.success('Termék hozzáadva');
      })
      .catch(() => {
        toast.error('Sikertelen termék létrehozás!');
      });
  }
  useEffect(() => {
    findAllCategory(({ categories: categoriesData }) => setCategories(categoriesData));
  }, []);

  return (
    <div className="admin-delmod-container">
      <h2>Új termék létrehozása</h2>
      <form onSubmit={handleCreatingProduct}>
        <select name="categoryId">
          {categories?.map?.((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label>
          <p>Termék neve</p>
          <input type="text" name="name" />
        </label>
        <label>
          <p>Termék ára</p>
          <input type="text" name="price" />
        </label>
        <label>
          <p>Termék leírás</p>
          <input type="text" name="description" />
        </label>
        <label>
          <p>Termék darabszám</p>
          <input type="text" name="quantity" />
        </label>
        <label>
          <p>borítókép:</p>
          <input type="file" name="thumbnail" />
        </label>
        <label>
          <p>egyéb képek:</p>
          <input type="file" name="pic" multiple />
        </label>
        <button type="submit">Küldés</button>
      </form>
    </div>
  );
}
