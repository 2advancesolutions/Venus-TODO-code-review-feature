import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/**
 * Application entry point
 * 
 * This is the main entry file for the Venus Todo application.
 * It creates the React root and renders the main App component.
 * The application is wrapped in React.StrictMode for development best practices.
 * 
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)