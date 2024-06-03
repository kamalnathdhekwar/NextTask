import Link from 'next/link';
import Card from './Card';
import formImage from '../../../../public/images/formImage.png' 

export default function Home() {
  return (
    <div className="">
       
       <h1 className="text-3xl font-bold mb-6">Welcome to the Event  App</h1>

      <div className="min-h-screen bg-gray-100 flex  items-center  ">
      <Card heading="Orgnize a Event" image={formImage} cardDetail="Here you can orgnized the event" bgColor="bg-gradient-to-l from-cyan-400 to-sky-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-sky-700" />
      <Card heading="Orgnize a Event" image="" cardDetail="Here you can orgnized the event" bgColor="bg-gradient-to-r from-emerald-400 to-teal-500  dark:bg-gradient-to-r dark:from-emerald-500 dark:to-teal-600" />
      <Card heading="Orgnize a Event" image="" cardDetail="Here you can orgnized the event" bgColor="bg-gradient-to-r from-orange-400 to-orange-600 dark:bg-gradient-to-r dark:from-orange-500 dark:to-orange-700"/>
    </div>

    </div>
  );
}
