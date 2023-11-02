import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextsProvider from './contexts/Contexts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ContextsProvider>
    <App />
  </ContextsProvider>
  </React.StrictMode>
);