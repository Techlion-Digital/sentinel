import { BrowserRouter } from 'react-router'
import AppRoutes from './app/AppRoutes.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
