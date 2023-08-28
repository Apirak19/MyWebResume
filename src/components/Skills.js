import React from 'react';

const Skills = () => {
 return (
  <section id="skills" className="skills section-bg">
   <div className="container" 
   // data-aos="fade-up"
   >
    <div className="section-title">
     <h2>Skills</h2>
     <p>Magnam dolores commodi suscipit...</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 skills-content">

     {/* HTML */}
     <div className="w-1/3 rounded-full p-5 bg-blue-accent">
         <div className="skill-detail flex justify-between">
            <h1>Icon</h1>
            <div className="">
               <h1>Skill1</h1>
               <p>Detail of skill</p>
            </div>
         </div>
         <div className="skill-gauge bg-gray w-1/2">
         </div>
     </div>

     {/* CSS */}
     here is pasted
             <div className='w-full px-4 lg:w-5/12'>
                <div className='mb-12'>
                   <div className='bg-light relative h-[10px] w-full rounded-2xl'>
                      <div className='bg-primary absolute top-0 left-0 h-full w-1/2 rounded-2xl'>
                         <span className='bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                            <span className='bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                            50%
                         </span>
                      </div>
                   </div>
                </div>
                <div className='mb-12'>
                   <div className='bg-light relative h-[10px] w-full rounded-2xl'>
                      <div className='bg-primary absolute top-0 left-0 h-full w-[75%] rounded-2xl'>
                         <span className='bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                            <span className='bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                            75%
                         </span>
                      </div>
                   </div>
                </div>
                <div className='mb-12'>
                   <div className='bg-light relative h-[10px] w-full rounded-2xl'>
                      <div className='bg-primary absolute top-0 left-0 h-full w-[90%] rounded-2xl'>
                         <span className='bg-primary absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white'>
                            <span className='bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                            90%
                         </span>
                      </div>
                   </div>
                </div>
             </div>

     {/* JavaScript */}
     

     {/* PHP */}
     

     {/* WordPress/CMS */}
     

     {/* Photoshop */}
     

    </div>
   </div>
  </section>
 );
};

export default Skills;
