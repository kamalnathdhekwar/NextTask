import Image from "next/image";

import HomeEventSection from "@/components/HomeEvent/HomeEventSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

     <HomeEventSection/>
    </main>
  );
}
