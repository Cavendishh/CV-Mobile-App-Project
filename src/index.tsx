// Designer, Developer, and Author - Janne Kavander
// Student number 1903048

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'

// We want to access the user (for authentication and authorization) anywhere
// in the application so I import AuthProvider here
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
