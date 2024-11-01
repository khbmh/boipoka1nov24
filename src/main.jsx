import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './assets/components/Root';
import ErrorPage from './assets/components/errorpage/ErrorPage';
import Home from './assets/components/home/Home';
import ListedBooks from './assets/components/listedBooks/ListedBooks';
import PageRead from './assets/components/pagetoRead/PageRead';
import BookDetails from './assets/components/books/BookDetails';

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
        path: '/books/:bookId',
        element: (
          <div className='p-2 md:p-5'>
            <BookDetails />
          </div>
        ),
        loader: () =>
          fetch(
            'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json',
          )
            .then((response) => {
              if (!response.ok) {
                throw new Response('Failed to load book data', {
                  status: response.status,
                });
              }
              return response.json();
            })
            .then((data) => data), // Return the data to the BookDetails component
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
