import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';

// createBrowserRouter() method take route definitions as parameter
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
