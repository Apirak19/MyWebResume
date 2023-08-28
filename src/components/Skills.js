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
      <div className="w-1/3 p-5 m-5 bg-light-yellow rounded-xl border-4 flex flex-col justify-center items-center">

         <div className='skill-detail flex justify-between items-center w-full'>
            <img className="skill-icon bg-black rounded-full w-32 h-32 m-2" src='/src/assets/images/portrait.jpg'/>
            <div className="skill-text">
               <div className="">
                  <h1>Skill1</h1>
                  <p>Detail of skill</p>
               </div>
            </div>
         </div>
         
         <div className="skill-gauge w-[95%] flex justify-center items-center ">
            <div className='bg-cool-gray relative h-4 w-full rounded-2xl mx-2'>
               <div className='bg-light-blue-accent absolute top-0 left-0 flex h-full w-1/2 items-center justify-center rounded-2xl text-xs font-semibold text-white'>
               </div>
            </div>
            <p className='text-red mx-2'>100%</p>
         </div>
      </div>
      </div>

             
     {/* CSS */}
        
     {/* WordPress/CMS */}
     

     {/* Photoshop */}
     

   </div>
  </section>
 );
};

export default Skills;
