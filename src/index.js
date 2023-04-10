import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { AppContext } from './Components/context/AppContext';
import AppContextProvider from './Components/context/AppContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>

    <App />

  </AppContextProvider>
);
