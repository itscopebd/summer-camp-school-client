import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProvider from './AuthContext/AuthProvider'
import { ToastContainer } from 'react-toastify';

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>

      <ToastContainer />
    </AuthProvider>

  </React.StrictMode>,
)
