"use client";

import React from 'react';
import { useEventContext } from '../EventContext';

const EnteredEventList = () => {
  const { events } = useEventContext();

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Entered Events</h2>
      <ul>
        {events.length === 0 && <p>No events entered yet.</p>}
        {events.map((event, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{event.eventName}</h3>
            <p>{event.eventDescription}</p>
            <p className="text-gray-600">Deadline: {event.submissionDeadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnteredEventList;
