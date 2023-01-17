import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <div className='wrapper'>
      <Header />
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
      <Footer />
    </div>
  );
}

export default NotFoundPage;

