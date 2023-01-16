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
  id: number;
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

export type IUserBookingRequest = {
    date: string;
    time: string;
    contactPerson: string;
    phone: string;
    withChildren: boolean;
    peopleCount: number | undefined;
    locationId: number | undefined;
    questId: number | undefined;
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

export type ISlot = {
  time: string;
  isAvailable: boolean;
};

export type IQuestBookingSlots = {
  id: number;
  locations: [
    {
      id: number;
      address: string;
      coords: number[];
    }
  ];
  slots: {
    today: ISlot[];
    tomorrow: ISlot[];
  };
};
