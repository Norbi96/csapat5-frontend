import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Products from './pages/Products/Products';
import ProductDetail from './components/Product/ProductDetail';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import AdminOrders from './pages/Admin/Orders-Admin/AdminOrders';
import ProfileUpdate from './pages/Profile/ProfileUpdate';
import ProfileOrders from './pages/Profile/ProfileOrders';
import NotFound from './pages/404/PageNotFound';
import AdminProducts from './pages/Admin/Products-Admin/AdminProducts';
import AdminCategories from './pages/Admin/Categories-Admin/AdminCategories';
import AdminUsers from './pages/Admin/Users-Admin/AdminUsers';
import AddNewProduct from './pages/Admin/Products-Admin/AddNewProduct';
import AddNewCategory from './pages/Admin/Categories-Admin/AddNewCategory';
import ModifyProducts from './pages/Admin/Products-Admin/ModifyProduct';
import ModifyCategories from './pages/Admin/Categories-Admin/ModifyCategories';
import AdminOrdersEdit from './pages/Admin/Orders-Admin/AdminOrdersEdit';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Products />,
        },
        {
          path: '/products/:id',
          element: <ProductDetail />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/profilUpdate',
          element: <ProfileUpdate />,
        },
        {
          path: '/profileOrder',
          element: <ProfileOrders />,
        },
      ],
    },
    {
      path: '/admin',
      element: <Admin />,
      children: [
        {
          path: '/admin/products',
          element: <AdminProducts />,
        },
        {
          path: '/admin/products/:id',
          element: <ModifyProducts />,
        },
        {
          path: '/admin/products/new',
          element: <AddNewProduct />,
        },
        {
          path: '/admin/category',
          element: <AdminCategories />,
        },
        {
          path: '/admin/category/new',
          element: <AddNewCategory />,
        },
        {
          path: '/admin/category/:id',
          element: <ModifyCategories />,
        },
        {
          path: '/admin/users',
          element: <AdminUsers />,
        },
        {
          path: '/admin/orders',
          element: <AdminOrders />,
        },
        {
          path: '/admin/orders/:id',
          element: <AdminOrdersEdit />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
