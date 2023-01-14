import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import BookingPage from '../../pages/booking-page/booking-page';
import MainPage from '../../pages/main-page/main-page';
import HistoryRouter from '../history-router/history-router';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import UserBookingPage from '../../pages/user-booking-page/user-booking-page';
import PrivateRoute from '../private-route/private-route';
import QuestPage from '../../pages/quest-page/quest-page';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isQuestsDataLoading = useAppSelector((state) => state.isQuestsDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isQuestsDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Booking}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <BookingPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.UserBooking}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <UserBookingPage />
            </PrivateRoute>
          }
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
          path={AppRoute.Quest}
          element={<QuestPage />}
        />

      </Routes>
    </HistoryRouter>
  );
}

export default App;
