// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Importing global styles
import App from './App.jsx'  // Your main app component
import { BrowserRouter } from 'react-router-dom'  // Importing BrowserRouter for routing

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />  {/* App component is wrapped inside BrowserRouter */}
  </BrowserRouter>,
)
