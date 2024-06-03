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
    <div className=" ">

<form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-800 shadow-md rounded text-gray-700 dark:text-slate-400">
     <h1 className="lg:text-6xl md:text-4xl text-3xl font-extrabold font-sans mb-6">
          <span className='text-orange-600'>Create</span>
          <span className='text-slate-900 dark:text-slate-200'> Events</span>
        </h1>


      <div className="mb-4">
        <label htmlFor="eventName" className="block  font-medium mb-2 ">Event Name</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eventDescription" className="block font-medium mb-2">Event Description</label>
        <textarea
          id="eventDescription"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="submissionDeadline" className="block  font-medium mb-2">Submission Deadline</label>
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

    </div>
  );
};

export default EventForm;
