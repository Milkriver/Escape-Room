export const adaptQuestLevel = (questLevel: string) => {
  switch (questLevel) {
    case 'easy': return 'Легкий';
    case 'medium': return 'Средний';
    case 'hard': return 'Сложный';
    default: return 'Любой';
  }
};
