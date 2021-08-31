import React, { FC, useContext, createContext, useReducer } from 'react';

import { Action, AppState, ACTIONS } from './types';

const initialValues = {
  images: [],
};

type AppDispatch = (action: Action) => void;

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<AppDispatch | undefined>(undefined);

const AppReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ACTIONS.SET_IMAGES:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialValues);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = (): AppState => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};

export const useSetImages = (): ((payload: any[]) => void) => {
  const dispatch = useContext(AppDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useSetImages must be used within a AppProvider');
  }

  return (payload: any[]) =>
    dispatch({ type: ACTIONS.SET_IMAGES, payload: payload });
};

export default AppProvider;
