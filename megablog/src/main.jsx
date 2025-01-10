import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { Home, Login } from './pages'
import { Protected as AuthLayout } from './components/index.js'


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/> ,
    children : [
  {
    path : '/',
    element : <Home/>,

  },
  {
    path: '/login',
    element : (
      <AuthLayout
      authentication={false}
      >
        <div>
          <Login/>
        </div>
      </AuthLayout>
    )
  }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <App />
    </Provider>

  </StrictMode>,
)
