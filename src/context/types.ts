export enum ACTIONS {
  // eslint-disable-next-line no-unused-vars
  SET_IMAGES,
}

export interface Images {
  url: string;
}

export type Action = { type: ACTIONS.SET_IMAGES; payload: any[] };

export interface AppState {
  images?: any[];
}
