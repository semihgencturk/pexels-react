export enum ACTIONS {
  // eslint-disable-next-line no-unused-vars
  SET_IMAGES,
  SET_IS_SEARCHING,
  SET_RECENT_SEARCHES,
  SET_HEADER_BACKGROUND_IMAGE,
}

export interface Images {
  url: string;
}

export type Action =
  | { type: ACTIONS.SET_IMAGES; payload: any[] }
  | { type: ACTIONS.SET_IS_SEARCHING; payload: boolean }
  | { type: ACTIONS.SET_RECENT_SEARCHES; payload: string[] }
  | { type: ACTIONS.SET_HEADER_BACKGROUND_IMAGE; payload: any[] };

export interface AppState {
  images?: any[];
  isSearching: boolean;
  recentSearches: string[];
  headerBackgroundImage: any[];
}
