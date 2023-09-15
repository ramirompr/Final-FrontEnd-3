import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Context from './Context/Context';
import { AppProvider } from './Context/Theme.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Context>
      <App />
      </Context>
    </BrowserRouter>
    </AppProvider>
);


