import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUserBookingAction } from '../../store/api-actions';
import { IUserBooking } from '../../types/quest';

const renderUserBooking = (booking: IUserBooking) => (
  <div className="quest-card" key={`${booking.quest.id}_${booking.date}_${booking.time}`}>
    <div className="quest-card__img">
      <img src="img/content/maniac/maniac-size-s.jpg" width="344" height="232" alt={booking.quest.title} />
    </div>
    <div className="quest-card__content">
      <div className="quest-card__info-wrapper">
        <div className="quest-card__link">{booking.quest.title}</div>
        <span className="quest-card__info">
          [{booking.date}, {booking.time}. {booking.location.address}]
        </span>
      </div>
      <ul className="tags quest-card__tags">
        <li className="tags__item">
          <svg width="11" height="14" aria-hidden="true">
            <use xlinkHref="#icon-person"></use>
          </svg> {booking.quest.peopleMinMax}&nbsp;чел
        </li>
        <li className="tags__item">
          <svg width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-level"></use>
          </svg>
          {booking.quest.level}
        </li>
      </ul>
      <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>
    </div>
  </div>
);


function UserBookingPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const userBooking = useAppSelector((state) => state.userBooking);
  useEffect(() => {
    dispatch(fetchUserBookingAction());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <div className="cards-grid">
            {userBooking.map((element) => renderUserBooking(element))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserBookingPage;
