import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage, { action as newEventAction } from './pages/NewEvent';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          { path: 'new', element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// never rely just on client side validation

// checkout EventForm.js and NewEvent.js
// checkout EventForm.js for the defaultValue and required attribute of input element
// see how from action function in NewEvent.js we are returning a response..and we are
// consuming this response inside EventForm.js using useActionData() method

// validation at line 23 in EventForm.js

// useLoaderData() : This hook provides the value returned from your route loader.
// useActionData() : This hook provides the returned value from the previous navigation's 
// action result, or undefined if there was no submission.





// if we are filling a form and upon form submission we get some errors, than
// we should not discard all values..we should give opportunity to user to correct
// error fields..instead of making him fill whole form again



