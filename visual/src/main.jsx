import { createRoot } from 'react-dom/client'
import './index.css'
import CsvReader from './components/GetData'
import Home from './components/home/Home'
import { createBrowserRouter , RouterProvider  } from "react-router-dom"
import OutLet from './router/OutLet'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




















const router = createBrowserRouter([
  {
    path : '/',
    element : <OutLet/>,
    children : [
      {
        path : 'home',
        element : <Home />
      }
      ,
      {
        path : 'graph',
        element : <CsvReader/>
      }
    ]
  }
  
])




createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
  <CssBaseline />
    <RouterProvider router={router} />

</ThemeProvider>


)
