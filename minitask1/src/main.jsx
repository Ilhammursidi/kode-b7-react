import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './Button'
import './Global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button />
  </StrictMode>,
)
