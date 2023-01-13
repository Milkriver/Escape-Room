import { createReducer } from '@reduxjs/toolkit';
import { IActiveQuest, IQuest } from '../types/quest';
import { changeCurrentGenre, changeCurrentLevel, loadActiveQuest, loadQuests } from './action';

type InitialState = {
  currentGenre: string;
  currentLevel: string;
  quests: IQuest[];
  activeQuest: IActiveQuest | undefined;
};

const initialState: InitialState = {
  currentGenre: 'all-quests',
  currentLevel:'any',
  quests: [],
  activeQuest: undefined
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(changeCurrentLevel, (state, action) => {
      state.currentLevel = action.payload;
    })
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(loadActiveQuest, (state, action) => {
      state.activeQuest = action.payload;
    });
});

export { reducer };
