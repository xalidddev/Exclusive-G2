import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const fit = () => {
  document.documentElement.style.zoom = Math.max(0.5, Math.min(1, window.innerWidth / 1500))
}

fit()
window.addEventListener('resize', fit)

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
)
