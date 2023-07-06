import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)

