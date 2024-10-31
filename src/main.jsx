import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './assets/components/Root';
import ErrorPage from './assets/components/errorpage/ErrorPage';
import Home from './assets/components/home/Home';
import ListedBooks from './assets/components/listedBooks/ListedBooks';
import PageRead from './assets/components/pagetoRead/PageRead';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/listed-books',
        element: <ListedBooks />,
      },
      {
        path: '/reading-page',
        element: <PageRead />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
