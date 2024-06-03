import Image from "next/image";

import HomeEventSection from "@/components/HomePage/HomeEventSection/HomeEventSection";
import HeroSection from "@/components/HomePage/heroSection/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    
     <HeroSection/>
     <HomeEventSection/>
    </main>
  );
}
