import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Browse from './pages/Browse'


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />,
    },
    {
      path:'/browse',
      element:<Browse />
    }
  ])

  return (
    
      <RouterProvider router={router} />
  )
}

export default App
