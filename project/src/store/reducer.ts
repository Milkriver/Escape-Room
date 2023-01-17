import { AuthorizationStatus, TABS } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { IActiveQuest, IQuest, IQuestBookingSlots, IUserBooking } from '../types/quest';
import { changeCurrentGenre, changeCurrentLevel, loadActiveQuest, loadQuestBooking, loadQuests, loadUserBookings, requireAuthorization, setActiveTab, setError, setQuestsDataLoadingStatus } from './action';

type InitialState = {
  currentGenre: string;
  currentLevel: string;
  quests: IQuest[];
  activeQuest: IActiveQuest | undefined;
  authorizationStatus: AuthorizationStatus;
  isQuestsDataLoading: boolean;
  error: string | null;
  userBooking: IUserBooking[];
  activeTab: string;
  questBooking: IQuestBookingSlots | undefined;
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
  activeTab: TABS.QUESTS,
  questBooking: undefined,
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
    })
    .addCase(setActiveTab, (state, action) => {
      state.activeTab = action.payload;
    })
    .addCase(loadQuestBooking, (state, action) => {
      state.questBooking = action.payload;
    });

});

export { reducer };
