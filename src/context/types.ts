export enum ACTIONS {
  // eslint-disable-next-line no-unused-vars
  SET_IMAGES,
  SET_IS_SEARCHING,
}

export interface Images {
  url: string;
}

export type Action =
  | { type: ACTIONS.SET_IMAGES; payload: any[] }
  | { type: ACTIONS.SET_IS_SEARCHING; payload: boolean };

export interface AppState {
  images?: any[];
  isSearching: boolean;
}
