import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import ListedBooks from './components/ListedBooks.jsx'
import PagesToRead from './components/PagesToRead.jsx'
import BookDetails from './components/BookDetails.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("./booksData.json")
      },
      {
        path: "/listed-books",
        element: <ListedBooks />
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
