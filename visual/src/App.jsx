import SimpleCharts from "./components/LinePlot"
import CsvReader from "./components/GetData"
import { createBrowserRouter , RouterProvider  } from "react-router-dom"
import OutLet from "./router/OutLet"
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/graph',
    element : <CsvReader/>
  }
])



function App() {

  return (
    <>
    
      <Header/>
    <RouterProvider router={router} >
      <OutLet/>
    </RouterProvider>
      <Footer/>
    </>
  )
}

export default App
