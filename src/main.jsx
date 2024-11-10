import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import NotFount from './components/NotFount.jsx';
import AboutUs from './components/aboutus.jsx';
import Pages from './components/Pages/Pages.jsx';
import Categories from './components/Pages/Categories.jsx';
import DetailsPage from './components/Pages/detailsPage.jsx';


const Layout = () => {
  return (
    <div className="">
      <App />
      <Outlet />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/pages",
        element: <Pages></Pages>,
        loader: () => fetch('../category.json'),
        children: [
          {
            path: "/pages/:category",
            element: <Categories></Categories>,
            loader: ()=> fetch("../pages.json")
            
          }
        ]
      },
      {
        path: "/details/:detailId",
        element: <DetailsPage></DetailsPage>,
        loader: ()=> fetch("../pages.json")

      },
      {
        path: "*",
        element: <NotFount />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
