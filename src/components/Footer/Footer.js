import React from 'react'
import Image from 'next/image'
import FooterLogo from '../../../public/images/FooterLogo.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-orange-600 dark:bg-slate-900  border-t-2 border-orange-500'>

       <div className="flex lg:flex-row gap-6 items-center justify-between w-11/12 lg:max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">

       <div className="border-b border-orange-400 w-full flex flex-col sm:flex-row pb-5 items-start justify-center gap-6">

       <div className="flex flex-col gap-3 justify-center items-start w-full lg:w-1/3">
            <Image
            className="h-16 w-48"
              src={FooterLogo}
              alt="ProElevate Logo"
             
            />
            <p className="text-base text-white dark:text-slate-200 font-normal">Join Our Community: Connect with like-minded individuals and grow your network.</p>
         </div>


<div className="flex  sm:flex-row flex-col  justify-between lg:pl-5  pl-[12px] gap-x-8 flex-wrap">

<div className="flex flex-col mb-7 lg:pl-0 gap-3">
    <h1 className="text-white dark:text-slate-200  font-semibold text-[16px]">NextEvent &apos;s</h1>
    <div className="flex flex-col gap-2 mt-2">
      <div className="text-[14px] cursor-pointer text-white  dark:text-slate-200  transition-all duration-200 hover:text-gray-200">
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
      <div className="text-[14px] cursor-pointer text-white   dark:text-slate-200  transition-all duration-200 hover:text-gray-200">
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
</div>

{/* <div className="flex flex-col mb-7 lg:pl-0 gap-3 text-white dark:text-slate-200 ">
    <h1 className="text-white font-semibold text-[16px]">Useful Links</h1>
    <div className="flex flex-col gap-2 mt-2">
      <div className="text-[14px] cursor-pointer  transition-all duration-200 hover:text-gray-200">
        <Link href="/dsa-practice">DSA Practice</Link>
      </div>
      <div className="text-[14px] cursor-pointer  transition-all duration-200 hover:text-gray-200">
        <Link href="/interviews">Interviews</Link>
      </div>
      <div className="text-[14px] cursor-pointer  transition-all duration-200 hover:text-gray-200">
        <Link href="/jobs">Jobs</Link>
      </div>
      <div className="text-[14px] cursor-pointer  transition-all duration-200 hover:text-gray-200">
        <Link href="/competitions">Competitions</Link>
      </div>
      <div className="text-[14px] cursor-pointer  transition-all duration-200 hover:text-gray-200">
        <Link href="/resources">Resources</Link>
      </div>
    </div>
</div> */}

<div className="sm:pl-5 flex flex-col gap-y-8 ">
    <div className="flex flex-col gap-3 justify-center items-start">
      <p className="text-base font-bold text-gray-100">Follow us on</p>
      <div className="flex items-start justify-center gap-3">
        <a target="_blank" className="rounded-xl p-2 border border-gray-100 hover:cursor-pointer" href="https://www.instagram.com/kamalnath_06">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-[1.375rem] stroke-gray-50" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37M17.5 6.5h.01"></path>
          </svg>
        </a>
        <a target="_blank" className="rounded-xl p-2 border border-gray-100 hover:cursor-pointer" href="https://www.linkedin.com/in/kamalnath-dhekwar-0a5a38261/">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-[1.375rem]">
    <path fill="#fff" d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.77 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.23 0 22.23 0zM7.12 20.452H3.557V9H7.12v11.452zM5.34 7.433c-1.138 0-2.06-.927-2.06-2.068 0-1.14.922-2.068 2.06-2.068 1.14 0 2.06.928 2.06 2.068 0 1.14-.92 2.068-2.06 2.068zM20.452 20.452h-3.563v-5.925c0-1.41-.027-3.227-1.967-3.227-1.97 0-2.27 1.539-2.27 3.122v6.03H9.092V9H12.56v1.564h.047c.48-.91 1.646-1.87 3.386-1.87 3.617 0 4.287 2.38 4.287 5.472v6.286h-.001z"></path>
  </svg>
</a>

  
      </div>
    </div>
    <div className="lg:pl-0 gap-3 text-white dark:text-slate-200 ">
      <h1 className=" font-semibold text-[16px]">Contact Us</h1>
      <div className="flex flex-col gap-2 mt-2">
        <div className="text-[14px] cursor-pointer  transition-all duration-200 flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-2 stroke-white">
            <path d="m21 6-8.4 7.05a1 1 0 0 1-1.2 0L3 6m18 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6"></path>
          </svg>
          <a href="mailto:kamalnathdhekwar@gmail.com">kamalnathdhekwar@gmail.com</a>
        </div>
      </div>
      
    </div>
</div>

</div> 

        </div>

       </div>
    </div>
  )
}

export default Footer;
