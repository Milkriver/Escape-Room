import { AxiosInstance } from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { IActiveQuest, IQuest } from '../types/quest';
import { AppDispatch, State } from '../types/state';
import { loadActiveQuest, loadQuests } from './action';
import { APIRoute } from '../const';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<IQuest[]>(APIRoute.Quests);
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
      // eslint-disable-next-line no-console
      console.error(error);
    }
  },
);
