import { Link } from 'react-router-dom';
import './Login.css';
import useAuth from '../../hooks/useAuth';

export default function Login() {
  const { login, user } = useAuth();

  function loginHandler(e) {
    e.preventDefault();
    const mail = e.target.elements.mail.value;
    const pass = e.target.elements.password.value;
    login(mail, pass);
  }

  return (
    <>
      {!user && (
        <div className="login">
          <h3>Bejelentkezés</h3>
          <form onSubmit={loginHandler}>
            <label htmlFor="mail">
              <span className="material-symbols-outlined">mail</span>
              <input type="text" name="mail" />
            </label>
            <label htmlFor="password">
              <span className="material-symbols-outlined">key</span>
              <input type="password" name="password" />
            </label>
            <article>
              <h4>
                Nincs még fiókod? <Link to="/register">Regisztráció</Link>
              </h4>{' '}
            </article>
            <section>
              <button type="submit">
                <span className="material-symbols-outlined">login</span>
              </button>
            </section>
          </form>
        </div>
      )}
    </>
  );
}
