import { RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import './App.css'
import NewRecord from './pages/NewRecord'
import ListData, { listDataLoader } from './pages/ListData'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NewRecord />,
    },
    {
      path: "list",
      loader: listDataLoader,
      element: <ListData />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
