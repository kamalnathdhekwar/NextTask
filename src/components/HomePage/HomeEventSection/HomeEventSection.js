import Link from 'next/link';
import Card from './Card';
import formImage from '../../../../public/images/formImage.png' 
import eventList from '../../../../public/images/eventList.png' 

export default function Home() {
  return (
    <div className="w-full p-12 bg-orange-100 ">
       
       <h1 className="text-3xl font-bold mb-6">Welcome to the Event  App</h1>

      <div className=" flex  items-center justify-around   ">
      <Card heading="Orgnize a Event" image={formImage} cardDetail="Here you can orgnized the event" bgColor="bg-gradient-to-l from-cyan-400 to-sky-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-sky-700"  navPage="eventform" />
      <Card heading="Orgnize a Event" image={eventList} cardDetail="Here you can orgnized the event" bgColor="bg-gradient-to-r from-emerald-400 to-teal-500  dark:bg-gradient-to-r dark:from-emerald-500 dark:to-teal-600"  navPage="eventlist" />
      <Card heading="Orgnize a Event" image={eventList} cardDetail="Here you can orgnized the event" bgColor="bg-gradient-to-r from-orange-400 to-orange-600 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-700" navPage="eventdetail/0"/>
    </div>

    </div>
  );
}
