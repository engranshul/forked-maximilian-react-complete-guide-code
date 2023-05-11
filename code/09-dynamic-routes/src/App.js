import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
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
      { path: '/products/:productId', element: <ProductDetailPage /> }
    ],
  }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// concept of how product and product detail page are integrated
// concept how product detail page gets parameters

// An absolute path is a complete path that starts from the root of the application 
// and includes all the necessary segments to reach the desired route. It typically 
// begins with a forward slash ("/"). For example, an absolute path for a route in 
// React Router may look like "/products" or "/users/profile".

// A relative path, on the other hand, is a path that is relative to the current 
// location or context. It does not start with a forward slash ("/") and is typically 
// used when defining nested routes or when navigating within a specific area of the 
// application. Relative paths are written without the leading slash and can include 
// additional segments as needed. For example, if the current location is "/users" 
// and you want to navigate to a profile page, the relative path could be "profile".


// Returns an object of key/value pairs of the dynamic params from the current URL 
// that were matched by the route path.




