import { json, useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  console.log(response)

  if (!response.ok) {
    // ...
  } else {
    return response;
  }
}
