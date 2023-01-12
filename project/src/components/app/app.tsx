import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MainPage from '../../pages/main-page/main-page';
import HistoryRouter from '../history-router/history-router';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import UserBookingPage from '../../pages/user-booking-page/user-booking-page';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Booking}
          element={<BookingPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Contacts}
          element={<ContactsPage />}
        />
        <Route
          path={AppRoute.UserBooking}
          element={<UserBookingPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
