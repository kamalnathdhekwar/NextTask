"use client";

import { useParams } from 'next/navigation';
import { useEventContext } from '@/components/EventContext';
import Link from 'next/link';

const EventDetailPage = () => {
  const { id } = useParams();
  const { events } = useEventContext();
  const event = events[parseInt(id, 10)];

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Event not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center dark:bg-gray-800 bg-gray-100">
    <div className="max-w-lg w-full mx-auto p-8 bg-white shadow-md shadow-gray-600 dark:shadow-white rounded-lg flex flex-col items-center text-center dark:bg-gray-900">
      <h1 className="lg:text-6xl md:text-4xl text-3xl font-extrabold font-sans mb-6">
        <span className='text-orange-600'>Event</span>
        <span className='text-slate-900 dark:text-slate-200'> Details</span>
      </h1>
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{event.eventName}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{event.eventDescription}</p>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-8">
          <span className="font-semibold text-gray-800 dark:text-gray-200">Deadline:</span> {event.submissionDeadline}
        </p>
      <Link
     className="text-blue-500 underline hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
       href="/eventlist">
      Back to Event List
      </Link>
      </div>
      </div>
    </div>
  );
};

export default EventDetailPage;