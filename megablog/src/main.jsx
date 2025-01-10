import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { AddPost, Allpost, EditPost, Home, Login, Signup } from './pages'
import { Protected as AuthLayout } from './components/index.js'
// import AllPost from './pages/AllPost.jsx'
// import { Allpost } from './components'


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
  },
  {
    path : '/signup',
    element : (
      <AuthLayout authentication >
        <Signup/>
      </AuthLayout>
    )
  }, 
  {
    path : '/all-posts',
    element : (
      <AuthLayout authentication >
        <Allpost />
      </AuthLayout>
    )
  },
  {
    path : '/add-post',
    element : (
      <AuthLayout authentication >
          <AddPost />
      </AuthLayout>
    )
  },
  {
    path : '/edit-post/:slug',
    element : (
      <AuthLayout authentication >
        <EditPost />
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
