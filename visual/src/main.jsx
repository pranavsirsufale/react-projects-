import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/Header'


import SimpleCharts from "./components/LinePlot"
import CsvReader from './components/GetData'
import Home from './components/home/Home'
import { createBrowserRouter , RouterProvider  } from "react-router-dom"
import OutLet from './router/OutLet'


const router = createBrowserRouter([
  {
    path : '/',
    element : <OutLet/>
  },
  {
    path : 'home',
    element : <Home />
  }
  ,
  {
    path : 'graph',
    element : <CsvReader/>
  }
])




createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
</RouterProvider>
)
