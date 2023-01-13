import { generatePath, Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

function QuestPage(): JSX.Element {
  const quest = useAppSelector((state) => state.activeQuest);
  return (
    <div className="wrapper">
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={quest?.coverImgWebp} />
            <img src={quest?.coverImg} width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{quest?.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{quest?.type}Ужасы</p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{quest?.peopleMinMax[0]}&ndash;{quest?.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{quest?.level}Средний
              </li>
            </ul>
            <p className="quest-page__description">{quest?.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={generatePath(AppRoute.Booking, { id: String(quest?.id) })}>Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default QuestPage;
