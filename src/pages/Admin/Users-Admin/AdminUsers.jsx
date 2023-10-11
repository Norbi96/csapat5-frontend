import '../css/AllAdminItem.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUser, editUserAdmin, findAllUsers } from '../../../services/user_crud';
import Paginate from '../../../components/Paginate/Paginate';
import Search from '../../../components/Filter/Filter';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [usp, setUsp] = useSearchParams();
  const [update, setUpdate] = useState(false);

  const itemsPerPage = Number(usp.get('perPage') || 10);

  function selectHandler(e, user) {
    const valami = e.target.value === 'true';
    const data = {
      isAdmin: valami,
    };
    console.log(e.target.value);
    editUserAdmin(user.id, data)
      .then(() => toast.success(`sikeres változtatás ${user.name} `))
      .catch(() => toast.error('Nem sikerült'));
  }
  useEffect(() => {
    findAllUsers(setUsers, usp.toString());
  }, [usp, update]);

  useEffect(() => {
    findAllUsers(setUsers, usp.toString());
  }, [update]);

  const deleteHandler = async (userId) => {
    try {
      await deleteUser(userId);
      findAllUsers(setUsers, usp.toString());
    } catch (error) {
      console.error('Error deleting users:', error);
    }
  };

  return (
    <div className="admin-item-container">
      <Search />
      <ul className="items-list">
        <li>
          <span>E-Mail</span>
          <span>Teljes Név</span>
          <span>Felhasználó ID</span>
          <span>Lakcím</span>
          <span>Admin</span>
          <span>Törlés</span>
        </li>
        {users?.users?.map?.((user) => (
          <li key={user.id}>
            <span>{user.email}</span>
            <span>{user.name}</span>
            <span>{user.id}</span>
            <span>{user.address}</span>
            <span>
              <select onChange={(e) => selectHandler(e, user)}>
                <option value={user.isAdmin}>{user.isAdmin ? 'Admin' : 'Felhasználó'}</option>
                <option value={!user.isAdmin}>{!user.isAdmin ? 'Admin' : 'Felhasználó'}</option>
              </select>
            </span>
            <span>
              <button type="button" onClick={() => deleteHandler(user.id)} id="delete-btn">
                Törlés
              </button>
            </span>
          </li>
        ))}
      </ul>
      <Paginate total={users?.total} itemsPerPage={itemsPerPage} />
    </div>
  );
}
