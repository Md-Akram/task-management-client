import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from '../src/Pages/Home.jsx'
import Dashboard from '../src/Pages/Dashboard.jsx'
import AddTask from '../src/Pages/AddTask.jsx'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route path='/' element={<Home />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/addtask' element={<AddTask />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
