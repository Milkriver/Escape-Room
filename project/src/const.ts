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

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
