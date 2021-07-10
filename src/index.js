import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context';

ReactDOM.render(
    <Router>
        <AppProvider>
            <App />
        </AppProvider>
    </Router>,
    document.getElementById('root')
);
