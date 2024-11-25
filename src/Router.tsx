import App from '@/App';
import { MyAccount } from '@/pages/MyAccountPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/my-account/orders" />,
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
      {
        path: '/my-account/:menuItem',
        element: <MyAccount />,
      },
    ],
  },
]);
