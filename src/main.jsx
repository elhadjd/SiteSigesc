import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './assets/scss/variable.scss'
import 'react-toastify/dist/ReactToastify.css';


// Paginas
import {Home} from "./routes/Home"
import {News} from './routes/News'
import { NoteFound } from './routes/NoteFound'
import { Auth } from './routes/Auth'
import Contacts from './components/contact'
import { Prices } from './components/listPrices/Prices'
import Company from './components/listPrices/Company'

const router = createBrowserRouter([
  {
    element: <App/>,
    errorElement: <NoteFound/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: '/new',
        element: <News/>
      },
      {
        path: '/auth',
        element: <Auth/>
      },
      {
        path: '/contact',
        element: <Contacts/>
      },
      {
        path: '/prices',
        element: <Prices/>
      },
      {
        path: '/CreateCompany/:numberChoose',
        element: <Company/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
