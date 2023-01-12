import { mockQuests } from '../../mock/mock';
import QuestCard from '../quest-card/quest-card';

function QuestList(): JSX.Element {
  const quests = mockQuests;
  return (
    <div className='cards-grid'>
      {quests.map((element) => (
        <QuestCard quest={element} key={element.id}/>
      ))}
    </div>
  );
}

export default QuestList;
