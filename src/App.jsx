import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Browse from './pages/Browse'
import NetflixGPT from './pages/NetflixGPT'


function App() {

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
