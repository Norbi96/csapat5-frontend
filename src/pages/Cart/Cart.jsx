import { useEffect, useState } from 'react';
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import {
  deleteOneProductFromCart,
  deleteUserCart,
  editQuantityProductInCart,
  findUserCart,
  sendOrder,
} from '../../services/cartServices';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();
  const [update, setUpdate] = useState(false);
  const [total, setTotal] = useState(0);
  const [inCart, setInCart] = useState(0);
  const userId = user?.id;
  const navigate = useNavigate();
  useEffect(() => {
    findUserCart(userId, setCart);
  }, []);
  function deleteCart() {
    deleteUserCart(userId)
      .then(() => {
        setUpdate(!update);
        toast.success('Kosár tartalma törölve!');
      })
      .catch(() => toast.error('Hiba lépett fel a törlés során'));
  }
  function handleSendOrder() {
    const products = cart.map((item) => {
      return { id: item.productId, name: item.name, price: item.price, quantity: item.quantity };
    });
    const data = {
      products: [...products],
    };
    sendOrder(data)
      .then(() => {
        deleteCart();
        navigate('/');
        toast.success('Sikeres rendelés!');
      })
      .catch(() => toast.error('Nem sikerült a rendelés elküldése!'));
  }

  function deleteHandler(productId) {
    deleteOneProductFromCart(userId, productId)
      .then(() => {
        setUpdate(!update);
        toast.success('Sikeres termék törlés a kosárból');
      })
      .catch(() => {
        toast.error('Sikertelen törlés');
      });
  }
  useEffect(() => {
    const calculate = cart
      .map((cartItem) => cartItem.subtotal)
      .reduce((acc, curr) => acc + curr, 0);
    setTotal(calculate);
    const inMyCart = cart.map((cartItem) => cartItem.quantity).reduce((acc, curr) => acc + curr, 0);
    setInCart(inMyCart);
  }, [cart]);
  useEffect(() => {
    findUserCart(userId, setCart);
  }, [update, userId]);

  function handleRemoveQuantity(quantity, productId) {
    let qty;
    if (Number(quantity) > 1) {
      qty = quantity - 1;
    } else {
      qty = 1;
    }
    const data = {
      quantity: qty,
    };
    editQuantityProductInCart(userId, productId, data)
      .then(() => {
        setUpdate(!update);
      })
      .catch(() => toast.error('Sikertelen darabszám módosítás, HIBA LÉPETT FEL!'));
  }
  function handleAddQuantity(quantity, productId) {
    const qty = quantity + 1;

    const data = {
      quantity: qty,
    };
    editQuantityProductInCart(userId, productId, data)
      .then(() => {
        setUpdate(!update);
      })
      .catch(() => toast.error('Sikertelen darabszám módosítás, HIBA LÉPETT FEL!'));
  }

  return (
    <div className="cart-outside">
      {user?.email ? (
        <div className="cart">
          <h3>
            <b>{inCart}</b> termék van a kosárban.
          </h3>
          <hr />
          <div className="cart-header">
            <div className="cart-left">
              <button type="button" onClick={() => deleteCart()}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
            <h2>Kosár</h2>
            <div className="cart-right">
              <span>
                <b>{user.email}</b>
              </span>
            </div>
          </div>
          <hr />
          <section>
            <ul>
              <li>
                <span>Termék neve</span>
                <span>Termék ára</span>
                <span>Darabszám</span>
                <span>Részösszeg</span>
                <span>Törlés</span>
              </li>
              {cart?.map?.((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.price} Ft</span>
                  <span>
                    <button
                      id="qty-btn"
                      type="button"
                      onClick={() => handleRemoveQuantity(item.quantity, item.productId)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      id="qty-btn"
                      type="button"
                      onClick={() => handleAddQuantity(item.quantity, item.productId)}
                    >
                      +
                    </button>
                  </span>
                  <span>{item.price * item.quantity} Ft</span>
                  <span>
                    <button
                      type="button"
                      onClick={() => deleteHandler(item.productId)}
                      id="delete2-btn"
                    >
                      Törlés
                    </button>
                  </span>
                </li>
              ))}
              <li>
                <span>Végösszeg</span>
                <span>{total} Ft</span>
              </li>
              <br />
              {inCart > 0 && (
                <button type="button" onClick={handleSendOrder} id="primary-btn">
                  Megrendelés elküldése
                </button>
              )}
            </ul>
          </section>
        </div>
      ) : (
        <div className="cart">
          <hr />

          <h2>Kosár</h2>
          <hr />
          <section>
            <h2>
              Be kell jelentkezni a kosár használatához! <Link to="/login">Bejelentkezés</Link>
            </h2>
          </section>
        </div>
      )}
    </div>
  );
}
