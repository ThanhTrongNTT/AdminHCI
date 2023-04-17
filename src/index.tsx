import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './context/ThemeProvider';
import './index.css';
import DeclareRouter from './route';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeProvider>
        {/* <React.StrictMode> */}
        <Router>
            {/* <App />  // Change from App to DeclareRouter*/}
            <DeclareRouter />
            <ToastContainer />
        </Router>
        {/* </React.StrictMode> */}
    </ThemeProvider>,
);
