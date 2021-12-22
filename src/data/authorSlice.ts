import { createSlice } from '@reduxjs/toolkit';

import { SlugType } from './common';

export interface AuthorType {
  _id: string;
  slug: SlugType;
  name: string;
}

export const authorsSlice = createSlice({
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
