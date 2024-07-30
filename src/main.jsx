import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routs from './Router/Routs'
import AuthProvider from './Components/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routs}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
