import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Global.css'
import { BrowserRouter } from 'react-router'
import AppRouter from './AppRouter'
import LoginProvider from './context/authcontext/Provider'
import store from './redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <LoginProvider>
      <Provider store={store}>
    <AppRouter />
      </Provider>
    </LoginProvider>
    </BrowserRouter>
  </StrictMode>
)
