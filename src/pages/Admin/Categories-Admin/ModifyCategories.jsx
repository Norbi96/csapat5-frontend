import '../css/AdminDelModContainer.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateCategory } from '../../../services/category_crud';

export default function ModifyCategories() {
  const { id } = useParams();

  const [newCategory, setNewCategory] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(id, { name: newCategory })
      .then(() => {
        toast.success('Sikeres kategória módosítás');
      })
      .catch(() => toast.error('Sikertelen módosítás'));
    setNewCategory('');
    navigate('/admin/category');
  };

  const handleNameChange = (e) => {
    setNewCategory(e.target.value);
  };

  return (
    <div className="admin-delmod-container">
      <h2>Kategória módosítása</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newCategoryName">
          <p>Új név</p>
          <input type="text" id="newCategoryName" value={newCategory} onChange={handleNameChange} />
        </label>
        <button type="submit">Küldés</button>
      </form>
    </div>
  );
}
