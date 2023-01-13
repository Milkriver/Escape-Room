import { useState } from 'react';
import { genres, levels } from '../../const';
import { Genre, Level } from '../../types/quest';

function Filter(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState('all-quests');
  const [currentLevel, setCurrentLevel] = useState('any');
  const changeGenreHandler = (genre: string) => setCurrentGenre(genre);
  const changeLevelHandler = (level: string) => setCurrentLevel(level);
  const renderGenreList = (genre: Genre) => (
    <li className="filter__item" key={genre.name}>
      <input type="radio" name="type" id={genre.type} checked={currentGenre === genre.type} />
      <label className="filter__label" htmlFor={genre.type} onClick={() => changeGenreHandler(genre.type)}>
        <svg className="filter__icon" width={genre.iconWidth} height={genre.iconHeight} aria-hidden="true">
          <use xlinkHref={genre.xlinkHref}></use>
        </svg><span className="filter__label-text">{genre.name}</span>
      </label>
    </li>
  );
  const renderLevelList = (level: Level) => (
    <li className="filter__item">
      <input type="radio" name="level" id={level.name} checked={currentLevel === level.type}/>
      <label className="filter__label" htmlFor={level.name} onClick={() => changeLevelHandler(level.type)}><span className="filter__label-text">{level.name}</span>
      </label>
    </li>
  );
  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {genres.map((genre) => renderGenreList(genre))}
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {levels.map((level)=> renderLevelList(level))}
        </ul>
      </fieldset>
    </form>
  );
}

export default Filter;
