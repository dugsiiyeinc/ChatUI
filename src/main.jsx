import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {createBrowserRouter} from 'react-router-dom'

import App from './App.jsx'
// import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'; // or './main.css'
import DarkModeProvider from './context/DarkModeProvider.jsx'
// import DarkModeProvider from './context/DarkModeContext';







createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
      <DarkModeProvider>
        
      <AuthProvider>
      <App />

      </AuthProvider>
      </DarkModeProvider>
   

     </ThemeProvider>
   
  </StrictMode>,
)
