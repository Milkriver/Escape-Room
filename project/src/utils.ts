import { QUEST_LEVELS } from './const';

export const adaptQuestLevel = (questLevel: string) => {
  switch (questLevel) {
    case QUEST_LEVELS.easy: return 'Легкий';
    case QUEST_LEVELS.medium: return 'Средний';
    case QUEST_LEVELS.hard: return 'Сложный';
    default: return 'Любой';
  }
};
