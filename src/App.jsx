import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Browse from './pages/Browse'
import NetflixGPT from './pages/NetflixGPT'
import { Provider, useDispatch } from 'react-redux'
import store from './utils/store'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './utils/firebase'
import { addUser, removeUser } from './utils/userSlice'


function App() {

  const dispatch = useDispatch()


  useEffect(()=>{
    onAuthStateChanged(auth,(user)=> {
      if (user) {
        const { uid,email,displayName} = user
        dispatch(addUser({uid,email,displayName}))
      } else {
        dispatch(removeUser())
      }
    })
  },[])

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/browse',
      element:<Browse />
    },
    {
      path:'/netflixGPT',
      element:<NetflixGPT />
    }
  ])

  return (
    
      <RouterProvider router={router} />
  )
}

export default App
