import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from "react-ga4"
import './index.css'
import App from './App.tsx'

ReactGA.initialize("G-PEE698BPL3");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
