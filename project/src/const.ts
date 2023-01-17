export enum AppRoute {
  Main = '/',
  Quest = '/quest/:id',
  Contacts = '/contacts',
  Booking = '/quest/:id/booking',
  Login = '/login',
  PageError = '*',
  UserBooking = '/my-quests'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Quests = '/quest',
  Booking = '/reservation',
  Login = '/login',
  Logout = '/logout',
}

export const QUEST_CONTACTS_COORDINATES = [59.90840521851865, 30.48297378898692];
export const CONTACTS = {
  PHONE: '8 (000) 111-11-11',
  EMAIL: 'info@escape-room.ru',
  OPENING: '10:00',
  CLOSE: '22:00',
  CITY: 'Санкт-Петербург',
  ADRESS: 'Набережная реки Карповка, д 5П'
};

export const TABS = {
  QUESTS: 'Quests',
  CONTACTS: 'Contacts',
  USER_BOOKING: 'User-booking',
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const TIMEOUT_SHOW_ERROR = 2000;

export const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';
export const URL_MARKER_CURRENT = 'img/svg/pin-active.svg';

export const genres = [
  {
    name: 'Все квесты',
    type: 'all-quests',
    xlinkHref: '#icon-all-quests',
    iconWidth: '26',
    iconHeight: '30',
  },
  {
    name: 'Приключения',
    type: 'adventures',
    xlinkHref: '#icon-adventure',
    iconWidth: '36',
    iconHeight: '30',
  },
  {
    name: 'Ужасы',
    type: 'horror',
    xlinkHref: '#icon-horror',
    iconWidth: '30',
    iconHeight: '30',
  },
  {
    name: 'Мистика',
    type: 'mystic',
    xlinkHref: '#icon-mystic',
    iconWidth: '30',
    iconHeight: '30',
  },
  {
    name: 'Детектив',
    type: 'detective',
    xlinkHref: '#icon-detective',
    iconWidth: '40',
    iconHeight: '30',
  },
  {
    name: 'Sci-fi',
    type: 'sci-fi',
    xlinkHref: '#icon-sci-fi',
    iconWidth: '28',
    iconHeight: '30',
  }
];

export const levels = [
  {
    type: 'any',
    name: 'Любой'
  },
  {
    type: 'easy',
    name: 'Лёгкий'
  },
  {
    type: 'medium',
    name: 'Средний'
  },
  {
    type: 'hard',
    name: 'Сложный'
  },
];

export const QUEST_LEVELS = {
  any: 'Любой',
  easy: 'Лёгкий',
  medium: 'Средний',
  hard: 'Сложный'
};


