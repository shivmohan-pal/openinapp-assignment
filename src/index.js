import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { GoogleOAuthProvider } from '@react-oauth/google';
const client_Id = "276655891253-ekbvsrtif3v5jfitu7kvriui1p5rs3r9.apps.googleusercontent.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId={client_Id}>
    <App />
  </GoogleOAuthProvider>
  </React.StrictMode>
);
