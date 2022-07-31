import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const roofRef = document.getElementById('root');

const root = ReactDOM.createRoot(roofRef);

//use Strict mode to prevent bugs
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);