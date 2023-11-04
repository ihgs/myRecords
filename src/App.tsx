import { RouterProvider, createHashRouter,  } from 'react-router-dom'
import './App.css'
import NewRecord from './pages/NewRecord'
import ListData, { listDataLoader } from './pages/ListData'
import Graph from './pages/Graph'

const base = import.meta.env.VITE_GITHUB_PAGES ? "/myRecords/" : "/"
console.log(base)
function App() {
  

  const router = createHashRouter([
    {
      path: `/`,
      element: <NewRecord />,
    },
    {
      path: `/list`,
      loader: listDataLoader,
      element: <ListData />
    },
    {
      path: `/graph`,
      element: <Graph />

    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
