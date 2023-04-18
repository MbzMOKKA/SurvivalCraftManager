//Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyle';
import App from './components/App';

//Render
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>
);
