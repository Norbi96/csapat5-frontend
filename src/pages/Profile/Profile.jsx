import useAuth from '../../hooks/useAuth';
import './Profile.css';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../constants';
import { findUser } from '../../services/user_crud';
import { useEffect, useState } from 'react';

export default function Profile() {
  const { user } = useAuth();
  console.log(user);
  const [currentUser, setCurrentUser] = useState(user);
  useEffect(() => {
    findUser(user.id, setCurrentUser).then((resp) => setCurrentUser(resp.data.user));
  }, []);
  console.log(currentUser);
  return (
    <div className="profile-card">
      <div className="card">
        <h1>Profil:</h1>
        <div className="image-content">
          <span className="overlay" />
          <div className="card-image">
            <img src={`${API_URL}/${currentUser.path}`} alt="" className="card-img" />
          </div>
        </div>
        <div className="card-content">
          <h2 className="name">{currentUser.fullName}</h2>
          <div className="details">
            <ul>
              <li className="label">E-mail:</li>
              <li className="data">{currentUser.email}</li>
            </ul>
            <ul>
              <li className="label">Szállítási cím:</li>
              <li className="data">{currentUser.address}</li>
            </ul>
            <ul>
              <li className="label">Felhasználó azonosító:</li>
              <li className="data">{currentUser.id}</li>
            </ul>
          </div>
          <button className="profileBtn">
            <NavLink to="/profilUpdate" className="text">
              Adatok módosítása
            </NavLink>
          </button>
          <button className="profileBtn">
            <NavLink to="/profileOrder" className="text">
              Megrendelések
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
