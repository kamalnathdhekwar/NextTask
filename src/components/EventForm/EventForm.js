"use client";

import { useState } from 'react';
import { useEventContext } from '../EventContext';

const EventForm = () => {
  const { addEvent } = useEventContext();
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [submissionDeadline, setSubmissionDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ eventName, eventDescription, submissionDeadline });
    setEventName('');
    setEventDescription('');
    setSubmissionDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Create Event</h2>

      <div className="mb-4">
        <label htmlFor="eventName" className="block text-gray-700 font-medium mb-2">Event Name</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eventDescription" className="block text-gray-700 font-medium mb-2">Event Description</label>
        <textarea
          id="eventDescription"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="submissionDeadline" className="block text-gray-700 font-medium mb-2">Submission Deadline</label>
        <input
          type="date"
          id="submissionDeadline"
          value={submissionDeadline}
          onChange={(e) => setSubmissionDeadline(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default EventForm;
