import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext';
import App from './App.jsx'
import './styles/my-bulma-project.css'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </AuthProvider>
)
