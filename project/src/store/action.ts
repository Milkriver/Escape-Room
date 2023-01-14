import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { IActiveQuest, IQuest } from '../types/quest';

export const changeCurrentGenre = createAction<string>('quest/changeCurrentGenre');
export const changeCurrentLevel = createAction<string>('quest/changeCurrentLevel');
export const loadQuests = createAction<IQuest[]>('quest/loadQuests');
export const loadActiveQuest = createAction<IActiveQuest>('quest/loadActiveQuest');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('quest/setError');
export const setQuestsDataLoadingStatus = createAction<boolean>('quest/setQuestsDataLoadingStatus');
