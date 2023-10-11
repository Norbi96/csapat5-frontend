import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { deleteOrder, findOrder } from '../../services/orders_crud';
import Paginate from '../../components/Paginate/Paginate';
import Search from '../../components/Filter/Filter';
import useAuth from '../../hooks/useAuth';
import './ProfileOrders.css';

function ProfileOrders() {
  const [orders, setOrders] = useState([]);
  const [usp, setUsp] = useSearchParams();
  const { user } = useAuth();
  const itemsPerPage = Number(usp.get('perPage') || 10);
  const handleDeleteOrder = async (id) => {
    try {
      await deleteOrder(id);
      // findAllOrders(setOrders, usp.toString());
      findOrder(user.id).then((resp) => setOrders(resp.data));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  useEffect(() => {
    const page = usp.get('page');
    findOrder(user.id).then((resp) => {
      setOrders(resp.data);
    });
  }, [usp]);

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="admin-orders">
      <Search />
      <ul>
        <li>
          <span className="orderId">Rendelési id</span>
          <span>Rendelési dátum</span>
          <span>Termék neve</span>
          <span>Mennyiség</span>
        </li>

        {orders?.map?.((order) => (
          <li key={order.id}>
            <span className="orderId">{order.id}</span>
            <span>{formatDate(order.date)}</span>
            <span>{order.name}</span>
            <span>{order.quantity}</span>
          </li>
        ))}
      </ul>
      <Paginate total={orders?.total} itemsPerPage={itemsPerPage} />
    </div>
  );
}

export default ProfileOrders;
