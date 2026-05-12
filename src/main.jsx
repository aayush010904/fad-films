import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import App from './App'
import './index.css'

function RouterWrapper(){
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <App key={location.pathname} />
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  </React.StrictMode>
)
