"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEventContext } from '../EventContext';

const EnteredEventList = () => {
  const { events, removeEvent } = useEventContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [deadlineFilter, setDeadlineFilter] = useState('');
  const router = useRouter();

  const handleViewMore = (id) => {
    router.push(`/eventdetail/${id}`);
  };

  const handleRemove = (index) => {
    if (confirm("Do you really want to delete this event?")) {
      removeEvent(index);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearchQuery = event.eventName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDeadlineFilter = deadlineFilter ? event.submissionDeadline === deadlineFilter : true;
    return matchesSearchQuery && matchesDeadlineFilter;
  });

  return (
    <div className='w-full h-screen flex items-center justify-center dark:bg-gray-500'>
      <div className="max-w-4xl w-full mx-auto p-10 bg-white shadow-md shadow-gray-600 dark:shadow-white rounded flex flex-col justify-center text-center dark:bg-gray-800 ">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-extrabold font-sans mb-6">
          <span className='text-orange-600'>Entered</span>
          <span className='text-slate-900 dark:text-slate-200'> Events</span>
        </h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by event name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="date"
            placeholder="Filter by deadline"
            value={deadlineFilter}
            onChange={(e) => setDeadlineFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="overflow-x-auto dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Event Name</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Deadline</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-4 dark:text-white">No events match your criteria.</td>
                </tr>
              )}
              {filteredEvents.map((event, index) => (
                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{event.eventName}</td>
                  <td className="border px-4 py-2">{event.eventDescription}</td>
                  <td className="border px-4 py-2">{event.submissionDeadline}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleViewMore(index)}
                      className="text-blue-500 underline hover:text-blue-700 mr-2"
                    >
                      View More
                    </button>
                    <button
                      onClick={() => handleRemove(index)}
                      className="text-red-500 underline hover:text-red-700 "
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnteredEventList;