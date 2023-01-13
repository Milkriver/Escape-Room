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

export type IActiveQuest = {
    id: number;
    title: string;
    description: string;
    previewImg: string;
    previewImgWebp: string;
    coverImg: string;
    coverImgWebp: string;
    level: string;
    type: string;
    peopleMinMax: number[];
}

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
    coords: number[];
  };
  quest: {
    id: number;
    title: string;
    previewImg: string;
    level: string;
    type: string;
    peopleMinMax: number[];
  };
};

export type Genre = {
  name: string;
  type: string;
  xlinkHref: string;
  iconWidth: string;
  iconHeight: string;
}

export type Level = {
  type: string;
  name: string;
}
