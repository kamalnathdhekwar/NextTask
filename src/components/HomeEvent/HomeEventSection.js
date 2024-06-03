
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Event App</h1>
      <div className="flex space-x-4">
        <Link
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
         href="/eventform">
         
            Create Event
        
        </Link>
        <Link 
       className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        href="/eventlist">
            View Entered Events
         
        </Link>
      </div>
    </div>
  );
}
