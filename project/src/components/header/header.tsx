import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link active" to={AppRoute.Main}>
                Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.Contacts}>
                Контакты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.UserBooking}>
                Мои бронирования
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <Link className="btn btn--accent header__side-item" to={AppRoute.Main}>
            Выйти
          </Link>
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >
            8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
