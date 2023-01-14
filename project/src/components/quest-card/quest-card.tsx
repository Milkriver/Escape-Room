import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { IQuest } from '../../types/quest';

type IProps = {
  quest: IQuest;
  onMouseEnter: (id: number | undefined) => void;
};
function QuestCard({ quest, onMouseEnter }: IProps): JSX.Element {
  const { id, title, level, previewImg, peopleMinMax } = quest;
  const handleQuestClick = () => {
    onMouseEnter(id);
  };

  return (
    <Link className='quest-card' onClick={handleQuestClick} to={generatePath(AppRoute.Quest, { id: String(id) })}>
      <div className='quest-card__img'>
        <picture>
          <img
            src={previewImg}
            width='344'
            height='232'
            alt={title}
          />
        </picture>
      </div>
      <div className='quest-card__content'>
        <div className='quest-card__info-wrapper'>
          <div className='quest-card__link'>{title}</div>
        </div>
        <ul className='tags quest-card__tags'>
          <li className='tags__item'>
            <svg width='11' height='14' aria-hidden='true'>
              <use xlinkHref='#icon-person'></use>
            </svg>
            {peopleMinMax[0]}&ndash; {peopleMinMax[1]}&nbsp;чел
          </li>
          <li className='tags__item'>
            <svg width='14' height='14' aria-hidden='true'>
              <use xlinkHref='#icon-level'></use>
            </svg>
            Сложный{level}
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default QuestCard;
