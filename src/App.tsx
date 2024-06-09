import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import Dashboard from '@/pages/dashboard';
import DashboardLayout from '@/components/dashboard-layout';
import User from '@/pages/user';
import Menu from '@/pages/menu';
import MenuAccess from '@/pages/menu-access';

export default function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      element: <Home />,
    },
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Dashboard />,
        },
        {
          path: 'user',
          element: <User />,
        },
        {
          path: 'menu',
          children: [
            {
              path: '',
              element: <Menu />,
            },
            {
              path: 'access',
              element: <MenuAccess />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
