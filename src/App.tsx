import { RouterProvider, createHashRouter,  } from 'react-router-dom'
import './App.css'
import NewRecord from './pages/NewRecord'
import ListData, { listDataLoader } from './pages/ListData'
import Graph from './pages/Graph'
import Settings from './pages/Settings'
import EditRecord, { dataLoader } from './pages/EditRecord'
import Hungry from './pages/Hungry'
import HungryGraph from './pages/HungryGraph'
import HungryList, {listDataLoader as hugryListDataLoader} from './pages/HungryList'

import.meta.env.VITE_GITHUB_PAGES ? "/myRecords/" : "/"

export const APP_VERSION = "1.0.5"

function App() {
  

  const router = createHashRouter([
    {
      path: `/`,
      element: <Hungry />
    },
    {
      path: `/hungry/graph`,
      element: <HungryGraph />
    },
    {
      path: `/hungry/list`,
      loader: hugryListDataLoader,
      element: <HungryList />
    },
    {
      path: `/new`,
      element: <NewRecord />,
    },
    {
      path: `/list`,
      loader: listDataLoader,
      element: <ListData />
    },
    {
      path: `/edit/:id`,
      loader: dataLoader,
      element: <EditRecord />
    },
    {
      path: `/graph`,
      element: <Graph />

    },
    {
      path: `/settings`,
      element: <Settings />

    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
