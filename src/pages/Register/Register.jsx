import { toast } from 'react-toastify';
import { API_URL } from '../../constants';
import useAuth from '../../hooks/useAuth';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const { register, user } = useAuth();
  const navigate = useNavigate();
  const registerHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pass2 = formData.get('pass2');
    const data = {
      email: formData.get('mail'),
      password: formData.get('pass'),
      fullName: formData.get('fullName'),
      address: formData.get('address'),
      profilePic:
        'https://www.transparentpng.com/thumb/flight-attendant/flight-attendant-user-icons-png-6.png',
    };
    if (pass2 !== data.password) return toast.error('A két jelszó nem egyezik!');
    register(data);
  };
  return (
    <>
      {!user && (
        <div className="register">
          <h3>Regisztráció</h3>
          <form onSubmit={registerHandler} name="formReg">
            <label htmlFor="mail">
              <span className="material-symbols-outlined">mail</span>
              <input type="text" name="mail" placeholder="E-mail cím" />
            </label>
            <label htmlFor="pass">
              <span className="material-symbols-outlined">key</span>
              <input type="password" name="pass" placeholder="Jelszó" />
            </label>
            <label htmlFor="pass">
              <span className="material-symbols-outlined">vpn_key_alert</span>
              <input type="password" name="pass2" placeholder="Jelszó újra" />
            </label>
            <label htmlFor="fullName">
              <span className="material-symbols-outlined">badge</span>
              <input type="text" name="fullName" placeholder="Teljes Név" />
            </label>
            <label htmlFor="address">
              <span className="material-symbols-outlined">home</span>
              <input type="text" name="address" placeholder="Szállítási cím" />
            </label>
            <article>
              <h4>
                Regisztráltál már? <Link to="/login">Bejelentkezés</Link>
              </h4>{' '}
            </article>
            <section>
              <button type="submit">
                <span className="material-symbols-outlined">how_to_reg</span>
              </button>
            </section>
          </form>
        </div>
      )}
    </>
  );
}
