import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">Clicking this WONT reload page</Link>. Go to{' '}
        Go to <a href="/products">Clicking this will reload page</a>.
      </p>
    </>
  );
}

export default HomePage;


// In a React application that uses React Router for client-side routing, using a 
// Link component provides a seamless user experience and avoids full page refreshes, 
// while using an href attribute with an anchor tag will perform a server-side 
// navigation and potentially cause a full page refresh. It is generally recommended 
// to use the Link component for client-side navigation between pages in a React 
// application that uses React Router.

// React Router's Link component is implemented using an anchor (<a>) tag under the 
// hood. However, it provides a better user experience and performance compared to using 
// traditional anchor tags for navigation.




