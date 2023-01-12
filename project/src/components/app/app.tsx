import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import BookingPage from '../../pages/booking-page/booking-page';
import MainPage from '../../pages/main-page/main-page';
import HistoryRouter from '../history-router/history-router';

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
      </Routes>
    </HistoryRouter>
  );
}

export default App;
