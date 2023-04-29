import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// In this code, you are creating a new React root by calling ReactDOM.createRoot(). The createRoot() method is a new API introduced in React 18 that allows you to create a new root for a React application.

// The createRoot() method takes a DOM element as an argument and returns a new React root object. In this case, the getElementById() method is used to retrieve the DOM element with an id of 'root'.

// Once you have a root object, you can call the render() method to render your React component. The render() method takes a single argument, which is a React element that represents your entire application. In this case, the App component is passed as the element to be rendered.

// So, the complete code creates a new React root and renders the App component inside it. The createRoot() method is used to create the root, and the render() method is used to render the App component.





