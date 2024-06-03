import React from 'react'
import Image from 'next/image'
import FooterLogo from '../../../public/images/FooterLogo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-orange-600 dark:bg-slate-900  border-t-2 border-orange-500'>

       <div className="flex lg:flex-row gap-6 items-center justify-between w-11/12 lg:max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">

       <div className="border-b border-orange-400 w-full flex flex-col sm:flex-row pb-5 items-start justify-center gap-6">

       <div className="flex flex-col gap-3 justify-center items-start w-full lg:w-1/3">
            <Image
            className="h-10 w-56"
              src={FooterLogo}
              alt="ProElevate Logo"
             
            />
            <p className="text-base text-white dark:text-slate-200 font-normal">Join Our Community: Connect with like-minded individuals and grow your network.</p>
         </div>


<div className="flex  sm:flex-row flex-col  justify-between lg:pl-5  pl-[12px] gap-x-8 flex-wrap">

<div className="flex flex-col mb-7 lg:pl-0 gap-3">
    <h1 className="text-white dark:text-slate-200  font-semibold text-[16px]">ProElevate&apos;s</h1>
    <div className="flex flex-col gap-2 mt-2">
      <div className="text-[14px] cursor-pointer text-white  dark:text-slate-200  transition-all duration-200 hover:text-gray-200">
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
      <div className="text-[14px] cursor-pointer text-white   dark:text-slate-200  transition-all duration-200 hover:text-gray-200">
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
</div>

<div className="flex flex-col mb-7 lg:pl-0 gap-3 text-white dark:text-slate-200 ">
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
</div>

<div className="sm:pl-5 flex flex-col gap-y-8 ">
    <div className="flex flex-col gap-3 justify-center items-start">
      <p className="text-base font-bold text-gray-100">Follow us on</p>
      <div className="flex items-start justify-center gap-3">
        <a target="_blank" className="rounded-xl p-2 border border-gray-100 hover:cursor-pointer" href="https://www.instagram.com/arshgoyalyt">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-[1.375rem] stroke-gray-50" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37M17.5 6.5h.01"></path>
          </svg>
        </a>
        <a target="_blank" className="rounded-xl p-2 border border-gray-100 hover:cursor-pointer" href="https://www.youtube.com/@ArshGoyal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="w-[1.375rem]">
            <path fill="#fff" fillRule="evenodd" d="M19.892 7.367a3.9 3.9 0 0 0-.723-1.8 2.6 2.6 0 0 0-1.82-.77c-2.536-.183-6.348-.183-6.348-.183s-3.81 0-6.35.184a2.6 2.6 0 0 0-1.818.769c-.39.529-.64 1.149-.725 1.8a28 28 0 0 0-.183 2.94v1.375q.013 1.474.183 2.939c.087.652.333 1.274.719 1.807a3.1 3.1 0 0 0 2.005.778c1.45.138 6.17.183 6.17.183s3.814 0 6.35-.183a2.6 2.6 0 0 0 1.82-.77c.388-.53.636-1.15.721-1.802q.17-1.463.184-2.939v-1.39a28 28 0 0 0-.185-2.938M9.174 13.375V8.223l4.95 2.584z" clipRule="evenodd"></path>
          </svg>
        </a>
        <a target="_blank" className="rounded-xl p-2 border border-gray-100 hover:cursor-pointer" href="https://twitter.com/arsh_goyal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="w-[1.375rem]">
            <path fill="#fff" d="m12.924 9.87 5.77-6.57h-2.576l-4.404 5.018L7.806 3.3H2.2l6.542 8.4-6.148 7H5.17l4.782-5.444 4.242 5.444H19.8zm-1.995 2.272-1.21-1.555-4.703-6.034h1.936l3.794 4.864 1.21 1.555L17 17.447h-1.936z"></path>
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
          <a href="mailto:arshgoyal98@gmail.com">arshgoyal98@gmail.com</a>
        </div>
      </div>
      <button className="mt-4 text-[14px] cursor-pointer text-white transition-all duration-200 flex gap-2 items-center group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 stroke-2 stroke-white group-hover:stroke-gray-200" viewBox="0 0 24 24">
          <path d="m21 6-8.4 7.05a1 1 0 0 1-1.2 0L3 6m18 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6"></path>
        </svg>
        Subscribe to Newsletter
      </button>
    </div>
</div>

</div> 

        </div>

       </div>
    </div>
  )
}

export default Footer;
