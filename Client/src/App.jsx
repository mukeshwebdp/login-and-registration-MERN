import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'

import Profile from './Companents/profile/Profile'
import Create from './Companents/Create/Create'
import Login from './Companents/Login/Login'

function App() {

  const route = createBrowserRouter([
    {
      path:'/create',
      element: <Create/>
    },{
      path:'/profile/:id',
      element: <Profile/>
    },{
      path:'/',
      element: <Login/>
    }
  ])

  return (
    <>
       <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
