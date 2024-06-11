'use client';
import React, { useState } from 'react';
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const people = [
   {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
   },
   {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
   },
   {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
   },
   {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
   },
   {
      id: 5,
      name: 'Tyler Durden',
      designation: 'Soap Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
   },
   {
      id: 6,
      name: 'Dora',
      designation: 'The Explorer',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
   },
];
const techStack = [
   {
     id: 1,
     name: 'JavaScript',
   //   designation: 'A high-level, versatile programming language.',
     image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
   },
   {
     id: 2,
     name: 'ReactJS',
   //   designation: 'A JavaScript library for building user interfaces.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s',
   },
   {
     id: 3,
     name: 'NodeJS',
   //   designation: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
     image: 'https://p7.hiclipart.com/preview/780/57/127/node-js-javascript-database-mongodb-native.jpg',
   },
   {
     id: 4,
     name: 'Java',
   //   designation: 'A high-level, class-based, object-oriented programming language.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCCdLCDhY7mwKXP4bHVQ1SFZxn3pPM2QLFw&s',
   },
   {
     id: 5,
     name: 'Spring Boot',
   //   designation: 'A framework for building production-ready Spring applications.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsq-7f5BWyog4cdeT1sQaYLVzhJ0o37Up8TjHvVU08WUgfyyMMRMHTVwJ5XReSjyhZa0&usqp=CAU',
   },
   {
     id: 6,
     name: 'MySQL',
   //   designation: 'An open-source relational database management system.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX4TOxFuGMLSyuIm8s6fZ4sQOCQGV2oAWog&s',
   },
 ];
 

export function AnimatedTooltipPreview() {
   return (
      <div className='flex flex-row items-center justify-center w-full'>
         <AnimatedTooltip items={techStack} />
      </div>
   );
}

export const AnimatedTooltip = ({
   items,
}: {
   items: {
      id: number;
      name: string;
      designation: string;
      image: string;
   }[];
}) => {
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   const springConfig = { stiffness: 100, damping: 5 };
   const x = useMotionValue(0); // going to set this value on mouse move
   // rotate the tooltip
   const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
   // translate the tooltip
   const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
   const handleMouseMove = (event: any) => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
   };

   return (
      <>
         {items.map((item, idx) => (
            <div
               className='-mr-4  relative group'
               key={item.name}
               onMouseEnter={() => setHoveredIndex(item.id)}
               onMouseLeave={() => setHoveredIndex(null)}
            >
               {hoveredIndex === item.id && (
                  <motion.div
                     initial={{ opacity: 0, y: 20, scale: 0.6 }}
                     animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                           type: 'spring',
                           stiffness: 260,
                           damping: 10,
                        },
                     }}
                     exit={{ opacity: 0, y: 20, scale: 0.6 }}
                     style={{
                        translateX: translateX,
                        rotate: rotate,
                        whiteSpace: 'nowrap',
                     }}
                     className='absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2'
                  >
                     <div className='absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px ' />
                     <div className='absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px ' />
                     <div className='font-bold text-white relative z-30 text-base'>{item.name}</div>
                     <div className='text-white text-xs'>{item.designation}</div>
                  </motion.div>
               )}
               <img
                  onMouseMove={handleMouseMove}
                  height={100}
                  width={100}
                  src={item.image}
                  alt={item.name}
                  className='object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500'
               />
            </div>
         ))}
      </>
   );
};
