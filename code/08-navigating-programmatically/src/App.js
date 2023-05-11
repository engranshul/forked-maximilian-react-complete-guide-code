import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


// In React Router, the useNavigate hook is used for programmatic navigation between 
// routes within your application. It's part of the react-router-dom library and 
// allows you to access the navigation functionality outside of a component.

// The useNavigate hook returns a navigate function that can be used to navigate to a 
// specific route programmatically. The function accepts a single argument, which is 
// the path or URL to navigate to.

// checkout Home.js



