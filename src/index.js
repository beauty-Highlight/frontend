import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import './assets/css/bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/venobox.css'
import './assets/css/chosen.css'
import './assets/fonts/font-awesome/css/font-awesome.min.css'
import './assets/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<AuthProvider>
			<App />
		</AuthProvider>
	</BrowserRouter>
);