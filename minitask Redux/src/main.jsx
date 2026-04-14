import { createRoot } from 'react-dom/client'
import './Global.css'
import { BrowserRouter } from 'react-router'
import AppRouter from './AppRouter'
import LoginProvider from './context/authcontext/Provider'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from './redux/store'

createRoot(document.getElementById('root')).render(
      <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
    <LoginProvider>
    <AppRouter />
    </LoginProvider>
    </BrowserRouter>
    </PersistGate>
      </ReduxProvider>,
)
