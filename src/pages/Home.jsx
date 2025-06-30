import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import { PinContainer } from '../components/ui/3d-pin';
import { AnimatedTooltipPreview } from '../components/ui/animated-tooltip';
import { HeroHighlight } from '../components/ui/hero-highlight';
import { MacbookScroll } from '../components/ui/macbook-scroll';
import { FlipWords } from '../components/ui/flip-words';
import { Navbar } from '../components/Navbar';
import { TextRevealCardPreview } from '../components/ui/text-reveal-card';
import { useEffect, useState } from 'react';

export const Home = () => {

   
      const words = ['Developer', 'Engineer', 'Coder'];
      const [currentText, setCurrentText] = useState('');
      const [currentWordIndex, setCurrentWordIndex] = useState(0);
      const [isErasing, setIsErasing] = useState(false);
      const [typingSpeed, setTypingSpeed] = useState(60); // Adjust speed in milliseconds
      // ...
   

    useEffect(() => {
      let timeout;
    
      const typeText = () => {
        if (isErasing) {
          // Erase text
          timeout = setTimeout(() => {
            setCurrentText((prevText) => prevText.slice(0, -1));
          }, typingSpeed);
        } else {
          // Type text
          timeout = setTimeout(() => {
            setCurrentText((prevText) => prevText + words[currentWordIndex][prevText.length]);
          }, typingSpeed);
        }
      };
    
      const handleTyping = () => {
        typeText();
    
        if (!isErasing && currentText === words[currentWordIndex]) {
          setIsErasing(true);
        } else if (isErasing && currentText === '') {
          setIsErasing(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      };
    
      timeout = setTimeout(handleTyping, typingSpeed);
    
      return () => clearTimeout(timeout);
    }, [currentText, isErasing, currentWordIndex, typingSpeed, words]);

   return (
      <>
         <div className='bg-black'>
            <div className='bg-transparent sticky top-0 z-50 w-full flex items-center justify-center'>
               <Navbar />
            </div>
            <div className='flex flex-col h-full bg-black'>
   

               <HeroHighlight>
                  <div id='home' className='overflow-hidden bg-black w-full pt-24'>
                     <div className='flex items-center flex-col mt-[-100]'>
                        <h1 className='text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold'>
                           Hi! I&apos;m Rahul
                        </h1>
                        <h1 className='text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-medium'>
                           a passionate
                        </h1>
                       <div className='text-5xl md:text-8xl font-medium min-h-[100px] fixed-height mx-auto bg-transparent text-neutral-400 mb-5'>
   {currentText}
</div>

                     </div>
                     <MacbookScroll
                        src={`https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        showGradient={false}
                     />
                  </div>

                  <div id='expertise' className='flex flex-col items-center pt-24'>
                     <h1 className='md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20'>
                        Expertise
                     </h1>
                     <div className='w-[80%] max-w-[40rem] h-full relative'>
                        {/* Gradients */}
                        <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] sm:h-[2px] blur-sm' />
                        <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px' />
                        <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] sm:h-[5px] blur-sm' />
                        <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px' />
                     </div>
                     <div className='w-full flex flex-wrap items-center justify-center gap-x-6'>
                        <CardContainer className='inter-var'>
                           <CardBody className='bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                              <div className='flex gap-2'>
                                 <CardItem
                                    translateZ='50'
                                    className='bg-black flex items-center justify-center w-14 h-14 '
                                 >
                                    <img
                                       src='https://deveshmeena-79rxq1w7d-deveshxm.vercel.app/app.svg'
                                       alt=''
                                       className='p-1'
                                    />
                                 </CardItem>

                                 <CardItem
                                    as='p'
                                    translateZ='60'
                                    className='max-w-sm text-neutral-300 my-auto'
                                 >
                                    <p className='text-xl font-bold'>Software Development</p>
                                 </CardItem>
                              </div>
                              <CardItem
                                 translateZ='80'
                                 className='w-full mt-4 text-white bg-white/10'
                              >
                                 {/* <img
                                 src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                 height='1000'
                                 width='1000'
                                 className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                                 alt='thumbnail'
                              /> */}
                                 <div className='p-4'>
                                    • Full-Stack Expertise: Proficient in both frontend and backend
                                    development with a focus on building scalable web applications.
                                    <br />
                                    <br />• Project Leadership: Led end-to-end development of
                                    multiple projects, from requirements to deployment. <br />
                                    <br />• Version Control: Experienced in Git for version control
                                    and collaborative development across distributed teams, managing
                                    projects end-to-end. <br />
                                    <br />• Cloud Deployment: Deployed applications on Firebase,
                                    Vercel, and Render for scalable infrastructure and optimized
                                    performance.
                                 </div>
                              </CardItem>
                              <CardItem
                                 translateZ={50}
                                 as={'div'}
                                 target='__blank'
                                 className='px-4 py-2 rounded-xl text-xs font-normal text-white mt-4'
                              >
                                 Tech Stack → Git, Docker, Firebase, Vercel, Render
                              </CardItem>
                           </CardBody>
                        </CardContainer>
                        <CardContainer className='inter-var'>
                           <CardBody className='bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                              <div className='flex gap-2'>
                                 <CardItem
                                    translateZ='50'
                                    className='bg-black flex items-center justify-center w-14 h-14 '
                                 >
                                    <img
                                       src='https://deveshmeena-79rxq1w7d-deveshxm.vercel.app/react.svg'
                                       alt=''
                                       className='p-1'
                                    />
                                 </CardItem>

                                 <CardItem
                                    as='p'
                                    translateZ='60'
                                    className='max-w-sm text-neutral-300 my-auto'
                                 >
                                    <p className='text-xl font-bold'>Frontend Development</p>
                                 </CardItem>
                              </div>
                              <CardItem
                                 translateZ='80'
                                 className='w-full mt-4 text-white bg-white/10'
                              >
                                 {/* <img
                                 src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                 height='1000'
                                 width='1000'
                                 className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                                 alt='thumbnail'
                              /> */}
                                 <div className='p-4'>
                                    • React.js Mastery: Developed responsive user interfaces using
                                    React.js, including state management with Redux Toolkit.
                                    <br />
                                    <br />• UI/UX Design: Designed and implemented user interfaces
                                    with Tailwind CSS, ensuring cross-browser compatibility and
                                    optimal user experience. <br />
                                    <br />• Authentication: Implemented JWT-based authentication for
                                    secure user login and registration. <br />
                                    <br />• Google OAuth Integration: Integrated Google
                                    authentication to streamline user access and enhance user
                                    experience.
                                 </div>
                              </CardItem>
                              <CardItem
                                 translateZ={50}
                                 as={'div'}
                                 href='https://twitter.com/mannupaaji'
                                 target='__blank'
                                 className='px-4 py-2 rounded-xl text-xs font-normal text-white mt-4'
                              >
                                 Tech Stack → React.js, Next.js, Redux Toolkit, Tailwind CSS
                              </CardItem>
                           </CardBody>
                        </CardContainer>
                        <CardContainer className='inter-var'>
                           <CardBody className='bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                              <div className='flex gap-2'>
                                 <CardItem
                                    translateZ='50'
                                    className='bg-black flex items-center justify-center w-14 h-14 '
                                 >
                                    <img
                                       src='https://deveshmeena-79rxq1w7d-deveshxm.vercel.app/nodejs.svg'
                                       alt=''
                                       className='p-1'
                                    />
                                 </CardItem>

                                 <CardItem
                                    as='p'
                                    translateZ='60'
                                    className='max-w-sm text-neutral-300 my-auto'
                                 >
                                    <p className='text-xl font-bold'>Backend Development</p>
                                 </CardItem>
                              </div>
                              <CardItem
                                 translateZ='80'
                                 className='w-full mt-4 text-white bg-white/10'
                              >
                                 {/* <img
                                 src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                 height='1000'
                                 width='1000'
                                 className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                                 alt='thumbnail'
                              /> */}
                                 <div className='p-4'>
                                    • Node.js & Express.js: Built RESTful APIs using Node.js and
                                    Express.js, ensuring efficient data retrieval and manipulation.
                                    <br />
                                    <br />• Spring Boot Expertise: Developed backend services using
                                    Spring Boot, ensuring high performance and scalability. <br />
                                    <br />• Database Management: Proficient in designing and
                                    optimizing databases including MongoDB, MySQL, and Postgres.{' '}
                                    <br />
                                    <br />• Security Implementation: Implemented OAuth2 and JWT for
                                    secure API endpoints and user authentication.
                                 </div>
                              </CardItem>
                              <CardItem
                                 translateZ={50}
                                 as={'div'}
                                 href='https://twitter.com/mannupaaji'
                                 target='__blank'
                                 className='px-4 py-2 rounded-xl text-xs font-normal text-white mt-4'
                              >
                                 Tech Stack → Node.js, Express.js, Spring Boot, MongoDB, MySQL,
                                 Postgres
                              </CardItem>
                           </CardBody>
                        </CardContainer>
                     </div>
                  </div>

                  <div id='experience' className='flex flex-col items-center pt-24'>
                     <h1 className='md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20'>
                        Experience
                     </h1>
                     <div className='w-[80%] max-w-[40rem] h-full relative'>
                        {/* Gradients */}
                        <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] sm:h-[2px] blur-sm' />
                        <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px' />
                        <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] sm:h-[5px] blur-sm' />
                        <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px' />
                     </div>
                     <div id='experience' className='flex flex-col items-center pt-24'>
  <h1 className='md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20'>
    Experience
  </h1>
  <div className='w-[80%] max-w-[40rem] h-full relative'>
    <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] sm:h-[2px] blur-sm' />
    <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px' />
    <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] sm:h-[5px] blur-sm' />
    <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px' />
  </div>
  <div className='w-full m-10'>
    <CardContainer className='inter-var m-5'>
      <CardBody className='bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
        <div className='flex gap-2'>
          <CardItem
            translateZ='50'
            className='bg-white flex items-center justify-center w-14 h-14 '
          >
            <img
              src='https://incture.com/wp-content/uploads/2022/02/Incture-Logo-Blue-150x34-px.svg'
              alt='Incture Logo'
              className='p-1'
            />
          </CardItem>

          <CardItem
            as='p'
            translateZ='60'
            className='max-w-sm text-neutral-300 flex flex-col gap-0'
          >
            <p className='text-lg font-semibold'>Associate Software Engineer</p>
            <p className='text-xs'>Incture Technologies</p>
            <p className='text-xs'>July 2024 – Present</p>
          </CardItem>
        </div>

        <CardItem translateZ='80' className='w-full mt-4 text-white bg-white/10'>
          <div className='p-4'>
            • Developed and optimized REST APIs with Java and Spring Boot, reducing data processing time by 35%.<br /><br />
            • Enhanced frontend performance by 40% using React and optimized state management.<br /><br />
            • Improved response times by 50% using Redis caching and PostgreSQL query optimization.<br /><br />
            • Implemented testing strategies with Jest and JUnit, achieving 85% code coverage and reducing bugs by 40%.<br /><br />
            • Contributed to system architecture decisions, improving scalability and tech stack adoption.
          </div>
        </CardItem>

        <div className='flex flex-col justify-between items-center mt-5'>
          <CardItem
            translateZ={50}
            as='div'
            target='__blank'
            className='px-4 py-2 rounded-xl text-xs font-normal text-white'
          >
            Tech Stack → Java, Spring Boot, React.js, PostgreSQL, Redis, Jest, JUnit
          </CardItem>
          <CardItem translateZ={60} as='button' className='px-4 py-2 rounded-xl mx-auto'>
            <AnimatedTooltipPreview />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  </div>
</div>

                  <div id='projects' className='flex flex-col items-center pt-24'>
                     <h1 className='md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20'>
                        Projects
                     </h1>
                     <div className='sm:w-[80%] max-w-[40rem] h-full relative'>
                        {/* Gradients */}
                        <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] sm:h-[2px] blur-sm' />
                        <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px' />
                        <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] sm:h-[5px] blur-sm' />
                        <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px' />
                     </div>
                     <div className='w-[80%] flex flex-wrap items-center justify-center'>
                        <div className='h-full flex items-center justify-center mt-20'>
                          <PinContainer title='milestonetech.vercel.app' href='https://milestonetech.vercel.app'>
  <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]'>
    <h3 className='max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100'>
      Project Management App
    </h3>
    <div className='text-base !m-0 !p-0 font-normal'>
      <span className='text-slate-500 text-xs font-semibold'>
        Engineered a comprehensive project management app with workspaces, 
        boards, lists, and cards using Next.js 14, Prisma, and PostgreSQL. 
        Integrated Stripe for payment processing and implemented role-based 
        access control for enhanced security.
      </span>
    </div>
    <img
      src='https://firebasestorage.googleapis.com/v0/b/rahul-mern-blog.appspot.com/o/Screenshot%202024-08-14%20123218.png?alt=media&token=96c3d48b-ed86-42e8-9374-d006f3127a42'
      alt='Milestone Project Cover'
      className='mt-5'
    />
  </div>
</PinContainer>

                        </div>
                        <div className='h-full w-auto flex items-center justify-center mt-20'>
                           <PinContainer
                              title='github.com/website-summarizer'
                              href='https://github.com/rahulchoudhary7/website-summarizer'
                           >
                              <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
                                 <h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
                                    Website Summarizer
                                 </h3>
                                 <div className='text-base !m-0 !p-0 font-normal'>
                                    <span className='text-slate-500 text-xs font-semibold '>
                                       Developed a website summarizer with React frontend, Java
                                       Spring Boot backend, and FastAPI for summarizing website
                                       content, integrating PostgreSQL for request history, and
                                       deployed via Docker
                                    </span>
                                 </div>
                                 {/* <div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' /> */}
                                 <img
                                    src='https://firebasestorage.googleapis.com/v0/b/rahul-mern-blog.appspot.com/o/Screenshot%202024-06-10%20152639.png?alt=media&token=175fd3d6-91cd-42e0-b4ff-0086a0c03cfc'
                                    alt='cover image'
                                    className='mt-5'
                                 />
                              </div>
                           </PinContainer>
                        </div>

                        <div className='h-full w-auto flex items-center justify-center mt-20 gap-10'>
                           <PinContainer
                              title='nomadsnexus.onrender.com'
                              href='https://nomadsnexus.onrender.com'
                           >
                              <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
                                 <h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
                                    Nomad&apos;s Nexus
                                 </h3>
                                 <div className='text-base !m-0 !p-0 font-normal'>
                                    <span className='text-slate-500 text-xs font-semibold '>
                                       Built a responsive MERN blog app with React, Tailwind, Redux,
                                       JWT, Google OAuth, secure admin, MongoDB CRUD, search, and
                                       comments.
                                    </span>
                                 </div>
                                 {/* <div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' /> */}
                                 <img
                                    src='https://firebasestorage.googleapis.com/v0/b/rahul-mern-blog.appspot.com/o/Screenshot%202024-06-10%20113938.png?alt=media&token=74d6d3f3-8a29-4a5e-96c2-31d68b211061'
                                    alt='cover image'
                                    className='mt-5'
                                 />
                              </div>
                           </PinContainer>
                        </div>

                        <div className='h-full w-auto flex items-center justify-center mt-20 gap-10'>
                           <PinContainer
                              title='netflix-design.vercel.app'
                              href='http://netflix-design-ln7b.vercel.app/'
                           >
                              <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
                                 <h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
                                    Netflix Clone
                                 </h3>
                                 <div className='text-base !m-0 !p-0 font-normal'>
                                    <span className='text-slate-500 text-xs font-semibold '>
                                       Created a Netflix-inspired UI design using Next.js and
                                       Tailwind CSS, featuring a sleek and responsive interface that
                                       mimics the popular streaming platform.
                                    </span>
                                 </div>
                                 {/* <div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' /> */}
                                 <img
                                    src='https://firebasestorage.googleapis.com/v0/b/rahul-mern-blog.appspot.com/o/Screenshot%202024-06-10%20120849.png?alt=media&token=3e32aa19-a71d-4f78-ae2b-3b8650353cdf'
                                    alt='cover image'
                                    className='mt-5'
                                 />
                              </div>
                           </PinContainer>
                        </div>
                     </div>
                  </div>
                  <div id='contact' className='flex flex-col items-center pt-24 w-full'>
                     <h1 className='md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20'>
                        Contact
                     </h1>
                     <div className='w-[80%] max-w-[40rem] h-full relative'>
                        {/* Gradients */}
                        <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] sm:h-[2px] blur-sm' />
                        <div className='absolute inset-x-2 sm:inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px' />
                        <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] sm:h-[5px] blur-sm' />
                        <div className='absolute inset-x-4 sm:inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px' />
                     </div>

                     <TextRevealCardPreview/>
                     <div className='flex gap-8 md:gap-16 justify-center mb-16'>

                        <a href='https://linkedin.com/in/raaxhul' target='_blank' className='flex flex-col items-center'>
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSZ35RsipBB3SApSg1Ect70YIvsXPWHYY9Q&s"
                           className='h-8 md:h-16 rounded-full'/>
                           <p className='text-white text-xs sm:text-sm'>LinkedIn</p>
                        </a>

                        <a href='https://github.com/rahulchoudhary7' target='_blank' className='flex flex-col items-center'>
                           <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                           className='h-8 md:h-16 rounded-full'/>
                           <p className='text-white text-xs sm:text-sm'>Github</p>
                        </a>
                        <a href='mailto:raaxhul@gmail.com' target='_blank' className='flex flex-col items-center'>
                           <img src="https://static.vecteezy.com/system/resources/previews/013/948/544/non_2x/gmail-logo-on-transparent-white-background-free-vector.jpg"
                           className='h-8 md:h-16 rounded-full'/>
                           <p className='text-white text-xs sm:text-sm'>Email</p>
                        </a>

                        <a href='https://x.com/R_ahulchoudhary' target='_blank' className='flex flex-col items-center'>
                           <img src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg"
                           className='h-8 md:h-16 rounded-full'/>
                           <p className='text-white text-xs sm:text-sm'>X</p>
                        </a>

                        <a href='https://instagram.com/_.rahulchoudhary._' target='_blank' className='flex flex-col items-center'>
                           <img src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_instagram-512.png"
                           className='h-8 md:h-16 rounded-full'/>
                           <p className='text-white text-xs sm:text-sm'>Instagram</p>
                        </a>
                        
                     </div>
                  </div>

               </HeroHighlight>
            </div>
         </div>
      </>
   );
};
