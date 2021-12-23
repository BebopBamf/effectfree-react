import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import sanityClient from '../client';

import type { RootState } from '../store';
import type { SlugType, ApplicationState } from './common';

type DescriptionType = {
  icon: React.FC;
  descriptor: string;
};

export interface AuthorType {
  _id: string;
  slug: SlugType;
  name: string;
  description: DescriptionType[];
}

const initialState: ApplicationState<AuthorType> = {
  status: 'idle',
  data: [],
};

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async () => {
    const data = await sanityClient.fetch(
      `*[_type == "author"] {
      _id,
      slug,
      name,
      image,
      description,
      bio
    }`,
    );
    return data;
  },
);

export const authorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthors.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      });
  },
});

export const selectStatus = (state: RootState) => state.authors.status;

export const selectErrors = (state: RootState) => state.authors.error;

export const selectAllAuthors = (state: RootState) => state.authors.data;

export const selectAuthorBySlug = (slug: string) => (state: RootState) =>
  state.authors.data.find((author) => author.slug.current === slug);

export default authorSlice.reducer;
