import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Global.css'
import { BrowserRouter } from 'react-router'
import AppRouter from './AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
