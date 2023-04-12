import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import DeclareRouter from './route';
import { ThemeProvider } from './context/ThemeProvider';
import { Flowbite } from 'flowbite-react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeProvider>
        <React.StrictMode>
            <Router>
                {/* <App />  // Change from App to DeclareRouter*/}
                <DeclareRouter />
                <ToastContainer />
            </Router>
        </React.StrictMode>
    </ThemeProvider>,
);
