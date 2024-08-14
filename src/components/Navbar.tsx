import React, { useState } from 'react';

export const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const resumeLink = "https://drive.google.com/file/d/1A6u2AcfP_ehNFK0ULyVsSgqh9A9T67LQ/view?usp=drive_link";

   return (
      <>
        {/* Mobile Navbar */}
        <div className='w-full flex justify-end p-2 md:hidden'>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-gray-100'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='h-8 w-8'>
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
               </svg>
            </button>
        </div>

        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-black/70 md:hidden fixed top-0 left-0 z-50 flex flex-col text-gray-100 items-center p-4 min-h-screen`}>
            <button
               onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('home');
               }}
               className="text-base font-normal cursor-pointer my-2"
            >
               Home
            </button>
            <button
               onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('expertise');
               }}
               className="text-base font-normal cursor-pointer my-2"
            >
               Expertise
            </button>
            <button
               onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('experience');
               }}
               className="text-base font-normal cursor-pointer my-2"
            >
               Experience
            </button>
            <button
               onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('projects');
               }}
               className="text-base font-normal cursor-pointer my-2"
            >
               Projects
            </button>
            <button
               onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection('contact');
               }}
               className="text-base font-normal cursor-pointer my-2"
            >
               Contact
            </button>
            
               href={resumeLink}
               target="_blank"
               rel="noopener noreferrer"
               className="text-base font-normal cursor-pointer my-2"
            >
               Resume
            </a>
         </div>

        {/* Desktop Navbar */}
        <div className='bg-black/70 hidden md:flex w-[90%] lg:w-[60%] rounded-full my-8 h-16 p-2'>
           <div className='flex flex-wrap w-full gap-4 md:gap-10 text-gray-100 items-center justify-center p-2 shadow-md shadow-gray-800 rounded-full'>
              <button
                 onClick={() => scrollToSection('home')}
                 className='text-base md:text-lg font-normal cursor-pointer'
              >
                 Home
              </button>
              <button
                 onClick={() => scrollToSection('expertise')}
                 className='text-base md:text-lg font-normal cursor-pointer'
              >
                 Expertise
              </button>
              <button
                 onClick={() => scrollToSection('experience')}
                 className='text-base md:text-lg font-normal cursor-pointer'
              >
                 Experience
              </button>
              <button
                 onClick={() => scrollToSection('projects')}
                 className='text-base md:text-lg font-normal cursor-pointer'
              >
                 Projects
              </button>
              <button
                 onClick={() => scrollToSection('contact')}
                 className='text-base md:text-lg font-normal cursor-pointer'
              >
                 Contact
              </button>
              
                 href={resumeLink}
                 target="_blank"
                 rel="noopener noreferrer"
                 className='text-base md:text-lg font-normal cursor-pointer'
              >
                 Resume
              </a>
           </div>
        </div>
      </>
   );
};
