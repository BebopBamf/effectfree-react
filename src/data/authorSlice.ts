import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { SlugType } from './common';

export interface AuthorType {
  _id: string;
  slug: SlugType;
  name: string;
}

export const authorSlice = createSlice({
  name: 'authors',
  initialState: {
    value: [
      {
        _id: '0iiidfsdfsfsdf',
        slug: {
          _type: 'slug',
          current: 'emendoza',
        },
        name: 'Euan Mendoza',
      },
    ],
  },
  reducers: {},
});

export default authorSlice.reducer;
