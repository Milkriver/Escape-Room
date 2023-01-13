import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchActiveQuestAction } from '../../store/api-actions';
import QuestCard from '../quest-card/quest-card';

function QuestList(): JSX.Element {
  const quests = useAppSelector((state) => state.quests);
  const currentFilter = useAppSelector((state) => state.currentGenre);
  const currentLevel = useAppSelector((state) => state.currentLevel);
  const dispatch = useAppDispatch();
  const handleQuestCardMouseEnter = (id: number | undefined) => {
    if (id !== undefined) {
      dispatch(fetchActiveQuestAction(id));
    }
  };
  const filteredQuest = currentFilter === 'all-quests' ? quests : quests.filter((element) => element.type === currentFilter);
  const levelQuests = currentLevel === 'any' ? filteredQuest : filteredQuest.filter((element) => element.level === currentLevel);
  return (
    <div className='cards-grid'>
      {levelQuests.map((element) => (
        <QuestCard quest={element} key={element.id} onMouseEnter={handleQuestCardMouseEnter}/>
      ))}
    </div>
  );
}

export default QuestList;
