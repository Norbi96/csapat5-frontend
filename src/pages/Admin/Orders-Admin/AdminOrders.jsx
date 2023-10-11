import '../css/AllAdminItem.css';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteOrder, findAllOrders } from '../../../services/orders_crud';
import Paginate from '../../../components/Paginate/Paginate';
import Search from '../../../components/Filter/Filter';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [usp, setUsp] = useSearchParams();
  const [update, setUpdate] = useState(false);

  const itemsPerPage = Number(usp.get('perPage') || 10);

  useEffect(() => {
    findAllOrders(setOrders, usp.toString());
  }, [usp, update]);

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

  function handleDelete(id) {
    deleteOrder(id)
      .then(() => {
        setUpdate(!update);
        toast.success('Sikeres törlés');
      })
      .catch(() => toast.error('Hiba a rendelés törlése közben'));
  }

  return (
    <div className="admin-item-container">
      <Search date name={false} userId />
      <ul className="items-list">
        <li>
          <span>Rendelési dátum</span>
          <span>Felhasználó Neve</span>
          <span>Felhasználó ID</span>
          <span>Rendelési ID</span>
          {/* <span>Módosítás</span> */}
          <span>Törlés</span>
        </li>

        {orders?.orders?.map?.((order) => (
          <li key={order.orderId}>
            <span>{formatDate(order.date)}</span>
            <span>{order.name}</span>
            <span>{order.userId}</span>
            <span>{order.orderId}</span>
            {/* <span>
              <Link to={`/admin/orders/${order.orderId}`}>Módosítás</Link>
            </span> */}
            <span>
              <button type="button" id="delete-btn" onClick={() => handleDelete(order.orderId)}>
                Törlés
              </button>
            </span>
          </li>
        ))}
      </ul>
      <Paginate total={orders?.total} itemsPerPage={itemsPerPage} />
    </div>
  );
}
