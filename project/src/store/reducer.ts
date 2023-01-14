import { AuthorizationStatus } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { IActiveQuest, IQuest, IUserBooking } from '../types/quest';
import { changeCurrentGenre, changeCurrentLevel, loadActiveQuest, loadQuests, loadUserBookings, requireAuthorization, setError, setQuestsDataLoadingStatus } from './action';

type InitialState = {
  currentGenre: string;
  currentLevel: string;
  quests: IQuest[];
  activeQuest: IActiveQuest | undefined;
  authorizationStatus: AuthorizationStatus;
  isQuestsDataLoading: boolean;
  error: string | null;
  userBooking: IUserBooking[];
};

const initialState: InitialState = {
  currentGenre: 'all-quests',
  currentLevel: 'any',
  quests: [],
  activeQuest: undefined,
  authorizationStatus: AuthorizationStatus.Unknown,
  isQuestsDataLoading: false,
  error: null,
  userBooking: [],
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setQuestsDataLoadingStatus, (state, action) => {
      state.isQuestsDataLoading = action.payload;
    })
    .addCase(loadUserBookings, (state, action) => {
      state.userBooking = action.payload;
    });

});

export { reducer };
