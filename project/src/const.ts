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

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const TIMEOUT_SHOW_ERROR = 2000;

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
