import { AxiosInstance } from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { IActiveQuest, IQuest, IUserBooking } from '../types/quest';
import { AppDispatch, State } from '../types/state';
import { loadActiveQuest, loadQuests, loadUserBookings, redirectToRoute, requireAuthorization, setActiveTab, setError, setQuestsDataLoadingStatus } from './action';
import { APIRoute, AppRoute, AuthorizationStatus, TABS, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData, UserData } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import {store} from './';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setQuestsDataLoadingStatus(true));
    const {data} = await api.get<IQuest[]>(APIRoute.Quests);
    dispatch(setQuestsDataLoadingStatus(false));
    dispatch(loadQuests(data));
  },
);


export const fetchActiveQuestAction = createAsyncThunk<void | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchActiveQuest',
  async (questId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<IActiveQuest>(`${APIRoute.Quests}/${questId}`);
      dispatch(loadActiveQuest(data));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.PageError));
    }
  },
);

export const fetchUserBookingAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/fetchUserBooking',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<IUserBooking[]>(APIRoute.Booking);
    dispatch(loadUserBookings(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setActiveTab(TABS.USER_BOOKING));
    dispatch(redirectToRoute(AppRoute.UserBooking));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'quest/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


