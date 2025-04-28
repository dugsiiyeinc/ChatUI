import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {createBrowserRouter} from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
      <AuthProvider>
      <App />

      </AuthProvider>
   

     </ThemeProvider>
   
  </StrictMode>,
)
