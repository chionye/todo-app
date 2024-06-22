import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Error  from './Error.tsx'
import './index.css'
import Login from './Login.tsx'
import About from './About.tsx'
import Register from './Register.tsx'
import Dashboard from './Dashboard.tsx'
import { Loader as rootLoader } from './components/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    loader: rootLoader,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'about',
        element: <About />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <Error />,
  }
  
]
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
