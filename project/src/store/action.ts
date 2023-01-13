import { createAction } from '@reduxjs/toolkit';
import { IActiveQuest, IQuest } from '../types/quest';

export const changeCurrentGenre = createAction<string>('quest/changeCurrentGenre');
export const changeCurrentLevel = createAction<string>('quest/changeCurrentLevel');
export const loadQuests = createAction<IQuest[]>('quest/loadQuests');
export const loadActiveQuest = createAction<IActiveQuest>('quest/loadActiveQuest');
