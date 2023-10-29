import React from 'react';
import { rootStore } from './rootStore';

export const StoreContext = React.createContext(rootStore);

export const useDataStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
