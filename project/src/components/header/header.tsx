import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, TABS } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveTab } from '../../store/action';
import { logoutAction } from '../../store/api-actions';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const activeTab = useAppSelector((state) => state.activeTab);
  const dispatch = useAppDispatch();
  const handleQuests = () => dispatch(setActiveTab('Quests'));
  const handleContacts = () => dispatch(setActiveTab('Contacts'));
  const handleUserBooking = () => dispatch(setActiveTab('User-booking'));

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={`link ${activeTab === TABS.QUESTS ? 'active' : ''}`} to={AppRoute.Main} onClick={handleQuests}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${activeTab === TABS.CONTACTS ? 'active' : ''}`} to={AppRoute.Contacts} onClick={handleContacts}>Контакты</Link>
            </li>
            {
              (authorizationStatus === AuthorizationStatus.Auth)
              &&
              <li className="main-nav__item">
                <Link className={`link ${activeTab === TABS.USER_BOOKING ? 'active' : ''}`} to={AppRoute.UserBooking} onClick={handleUserBooking}>Мои бронирования</Link>
              </li>
            }
          </ul>
        </nav>
        <div className="header__side-nav">
          {
            (authorizationStatus === AuthorizationStatus.Auth)
              ?
              <Link className="btn btn--accent header__side-item" to={AppRoute.Main} onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              >
                Выйти
              </Link>
              :
              <Link className="btn btn--accent header__side-item" to={AppRoute.Login}>
                Вход
              </Link>
          }
          <Link
            className="link header__side-item header__phone-link"
            to="tel:88003335599"
          >
            8 (000) 111-11-11
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
