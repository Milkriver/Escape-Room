import { Link } from 'react-router-dom';
import { AppRoute, TABS } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setActiveTab } from '../../store/action';

function Logo(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleQuests = () => dispatch(setActiveTab(TABS.QUESTS));
  return (
    <Link className="logo header__logo" to={AppRoute.Main} onClick={handleQuests}>
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  );
}

export default Logo;
