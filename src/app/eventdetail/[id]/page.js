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
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">{event.eventName}</h2>
      <p>{event.eventDescription}</p>
      <p className="text-gray-600">Deadline: {event.submissionDeadline}</p>
      <Link
      className="text-blue-500 underline mt-4 inline-block"
       href="/eventlist">
      Back to Event List
      </Link>
    </div>
  );
};

export default EventDetailPage;
