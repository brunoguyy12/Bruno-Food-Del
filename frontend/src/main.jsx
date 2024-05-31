/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
      <StrictMode>
        <BrowserRouter>
          <StoreContextProvider>
            <App/>
          </StoreContextProvider>
        </BrowserRouter>
      </StrictMode>
)
