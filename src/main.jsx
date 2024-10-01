import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PixabayState from './context/PixabayState.jsx'

createRoot(document.getElementById('root')).render(

  // allways use state of context
  <PixabayState>
    <App />
  </PixabayState>,
)
