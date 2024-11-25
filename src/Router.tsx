import App from '@/App';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';
import { Preview } from '@/pages/Preview';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Preview />,
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
    ],
  },
]);
