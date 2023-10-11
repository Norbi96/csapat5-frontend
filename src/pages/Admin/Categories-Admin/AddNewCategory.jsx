import '../css/AdminDelModContainer.css';
import { toast } from 'react-toastify';
import { createCategory } from '../../../services/category_crud';

export default function AddNewCategory() {
  function handleCreatingCategory(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    createCategory(formData)
      .then(() => {
        toast.success('Új kategória létrehozva');
      })
      .catch(() => toast.error('Hiba a kategória létrehozása közben.'));
  }

  return (
    <div className="admin-delmod-container">
      <h2>Új kategória létrehozása</h2>
      <form onSubmit={handleCreatingCategory} encType="multipart/form-data" method="POST">
        <label>
          <p>Kategória neve</p>
          <input type="text" name="name" />
        </label>
        <label>
          <p>Kategória kép url(hagyd üresen ha nincs)</p>
          <input type="file" name="pic" />
        </label>
        <button type="submit">Küldés</button>
      </form>
    </div>
  );
}
