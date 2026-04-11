import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Global.css'
import { BrowserRouter } from 'react-router'
import AppRouter from './AppRouter'
import LoginProvider from './context/authcontext/Provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <LoginProvider>
    <AppRouter />
    </LoginProvider>
    </BrowserRouter>
  </StrictMode>
)
