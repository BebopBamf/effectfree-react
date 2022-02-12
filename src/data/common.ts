export type SlugType = {
  _type: string;
  current: string;
};

export type ApplicationState<D> = {
  status: 'idle' | 'loading' | 'error' | 'success';
  data: D[];
  error?: string;
};
