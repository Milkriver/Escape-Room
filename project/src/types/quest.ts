export type IQuest = {
  id: number;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
};

export type IQuests = {
  quests: IQuest[];
};
