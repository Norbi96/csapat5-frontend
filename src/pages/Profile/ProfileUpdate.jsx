import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import './ProfileUpdate.css';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../constants';
import { updateUser, findUser } from '../../services/user_crud';

function ProfileUpdate() {
  const { user } = useAuth();
  const [formData, setFormData] = useState(user);
  useEffect(() => {
    findUser(user.id).then((resp) => setFormData(resp.data.user));
  }, []);
  const userPath = user.path;
  function updateProfile(e) {
    e.preventDefault(e);
    const fd = new FormData(e.target);
    updateUser(user.id, fd).then((resp) => setUserCard(resp));
  }
  return (
    <div>
      <div className="profile-card">
        <div className="card">
          <h1>Profil:</h1>
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img src={`${API_URL}/${userPath}`} alt="" className="card-img" />
            </div>
          </div>
          <form className="card-content" onSubmit={updateProfile}>
            <h2 className="name">{formData.fullName}</h2>
            <div className="details">
              <ul>
                <label>Név</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </ul>
              <ul>
                <label>Szállítási cím</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </ul>
              <ul>
                <label>E-mail</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </ul>
            </div>
            <button type="submit" className="profileBtn">
              Adatok módosítása
            </button>
            <NavLink to="/profile">Vissza</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
