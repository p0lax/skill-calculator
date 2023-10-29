import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'normalize.css';
import { StoreContext } from './stores/store.context.hook';
import { rootStore } from './stores/rootStore';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
