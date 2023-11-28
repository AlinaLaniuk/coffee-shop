import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app';
import Main from './pages/main/main';
import OurCoffee from './pages/ourCoffee/ourCoffee';
import ForYourPleasure from './pages/forYourPleasure.js/forYourPleasure';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/our-coffee",
        element: <OurCoffee />,
      },
      {
        path: "/for-your-pleasure",
        element: <ForYourPleasure />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
