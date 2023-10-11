import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AdminAccepted from './AdminAccepted';
import useAuth from '../../hooks/useAuth';
import { AuthProvider } from '../../contexts/authContext';

export default function Admin() {
  return (
    <AuthProvider>
      <AdminAccepted />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
    // <div>{user?.isAdmin === 1 ? : <p>nope</p>}</div>;
  );
}
