import React, {
  FC,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from 'react';
import getCuratedImages from '../api/getCuratedImages';
import getHeaderBackgroundImage from '../api/getHeaderBackgroundImage';

import { Action, AppState, ACTIONS } from './types';

const initialValues = {
  images: [],
  isSearching: false,
  recentSearches: [],
  headerBackgroundImage: [],
};

type AppDispatch = (action: Action) => void;

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppDispatchContext = createContext<AppDispatch | undefined>(undefined);

const AppReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ACTIONS.SET_IMAGES:
      return { ...state, images: action.payload };
    case ACTIONS.SET_IS_SEARCHING:
      return { ...state, isSearching: action.payload };
    case ACTIONS.SET_RECENT_SEARCHES:
      return { ...state, recentSearches: action.payload };
    case ACTIONS.SET_HEADER_BACKGROUND_IMAGE:
      return { ...state, headerBackgroundImage: action.payload };
    default:
      return state;
  }
};

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialValues);

  useEffect(() => {
    getCuratedImages().then((results) => {
      dispatch({ type: ACTIONS.SET_IMAGES, payload: results });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_RECENT_SEARCHES,
      payload: JSON.parse(localStorage.getItem('recentSearches') || ''),
    });
  }, []);

  useEffect(() => {
    getHeaderBackgroundImage().then((results) => {
      dispatch({ type: ACTIONS.SET_HEADER_BACKGROUND_IMAGE, payload: results });
    });
  }, []);

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

export const useSetIsSearching = (): ((payload: boolean) => void) => {
  const dispatch = useContext(AppDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useSetIsSearching must be used within a AppProvider');
  }

  return (payload: boolean) =>
    dispatch({ type: ACTIONS.SET_IS_SEARCHING, payload: payload });
};

export const useSetRecentSearches = (): ((payload: string[]) => void) => {
  const dispatch = useContext(AppDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useSetRecentSearches must be used within a AppProvider');
  }

  return (payload: string[]) =>
    dispatch({ type: ACTIONS.SET_RECENT_SEARCHES, payload: payload });
};
export default AppProvider;
