import { Link, NavLink, Outlet } from 'react-router-dom';

import './css/AdminAccepted.css';
import useAuth from '../../hooks/useAuth';
import AdminHeader from './AdminHeader';

export default function AdminAccepted() {
  const { user } = useAuth();
  return (
    <>
      {user?.isAdmin === 1 ? (
        <div className="admin-layout">
          <AdminHeader />
          <main>
            <Outlet />
          </main>
        </div>
      ) : (
        <span>
          <p
            style={{
              margin: 'auto',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              padding: '4rem',
              fontSize: '2em',
            }}
          >
            Nem rendelkezel jogosultsággal az oldal betöltéséhez.
          </p>
          <Link to="/" id="primary-btn">
            Vissza a főoldalra
          </Link>
        </span>
      )}
    </>
  );
}
