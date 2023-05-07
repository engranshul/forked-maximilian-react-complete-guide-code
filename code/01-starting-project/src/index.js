import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Single Page Applications (SPAs) and Multi-Page Applications (MPAs) are two different 
// types of web applications that serve different purposes and have different
// architectural designs.

// ****
// SPAs rely heavily on JavaScript and APIs to fetch and manipulate data, and typically 
// use client-side routing to enable fast and smooth navigation without page refreshes

// ****
// A Multi-Page Application (MPA) is a traditional web application that consists of 
// multiple HTML pages, each with its own distinct URL. MPAs rely on server-side 
// processing to generate and serve each page, and require full page reloads when 
// the user navigates between pages. MPAs are often used for content-based websites, 
// such as blogs, news sites, and e-commerce sites.

// ****
// It is possible to create a Single Page Application (SPA) with multiple URLs.
// SPAs typically rely on client-side routing to simulate the behavior of traditional 
// Multi-Page Applications (MPAs) by changing the URL and updating the content on the 
// same page dynamically, without a full page refresh. This allows the SPA to provide 
// a more seamless and responsive user experience.

// To implement multiple URLs in a SPA, you can use a JavaScript-based routing library 
// like React Router or Vue Router. These libraries allow you to define a set of URL 
// paths that correspond to different sections or views within your SPA, and to handle 
// routing between them programmatically using JavaScript.

// When a user navigates to a specific URL, the routing library will update the URL 
// in the browser's address bar and trigger the appropriate changes to the content on 
// the page, without requiring a full page refresh. This makes it possible to create a 
// SPA with multiple URLs that behaves like a traditional MPA, while still benefiting 
// from the performance and responsiveness advantages of a SPA architecture.





