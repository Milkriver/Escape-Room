import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { IActiveQuest, IQuest, IQuestBookingSlots, IUserBooking } from '../types/quest';

export const changeCurrentGenre = createAction<string>('quest/changeCurrentGenre');
export const changeCurrentLevel = createAction<string>('quest/changeCurrentLevel');
export const loadQuests = createAction<IQuest[]>('quest/loadQuests');
export const loadActiveQuest = createAction<IActiveQuest>('quest/loadActiveQuest');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('quest/setError');
export const setQuestsDataLoadingStatus = createAction<boolean>('quest/setQuestsDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('quest/redirectToRoute');
export const loadUserBookings = createAction<IUserBooking[]>('user/loadUserBooking');
export const setActiveTab = createAction<string>('logic/setActiveTab');
export const loadQuestBooking = createAction<IQuestBookingSlots>('quest/loadQuestBooking');
