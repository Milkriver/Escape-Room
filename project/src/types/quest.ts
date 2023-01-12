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


export type IUserBooking = {
    date: string;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number;
    location: {
      id: number;
      address: string;
      coords: number[];};
    quest: {
      id: number;
      title: string;
      previewImg: string;
      level: string;
      type: string;
      peopleMinMax: number[];};
    };
