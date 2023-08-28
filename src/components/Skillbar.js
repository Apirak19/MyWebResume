import React from 'react'

const Skillbar = () => {
  return (
        <div className="sm:w-full w-full p-2 bg-light-yellow rounded-xl flex flex-col justify-center items-center border-red border-4">

           <div className='skill-detail flex justify-between items-center w-full border-green border-4'>
              <img className="skill-icon bg-black rounded-full w-32 h-32 px-0 " src='/src/assets/images/portrait.jpg' />
              <div className="skill-text w-[65%] px-3 border-red border-4">
                 <div className="flex flex-col items-end">
                    <h1 className='text-xl font-bold'>JavaScript Mastery</h1>
                    <p>Detail of skill</p>
                 </div>
              </div>
           </div>

           <div className="skill-gauge w-[95%] flex justify-center items-center my-2">
              <div className='bg-cool-gray relative h-4 w-full rounded-2xl mx-2'>
                 <div className='bg-light-blue-accent absolute top-0 left-0 flex h-full w-1/2 items-center justify-center rounded-2xl text-xs font-semibold text-white'>
                 </div>
              </div>
              <p className='text-red mx-2'>100%</p>
           </div>
        </div>
  )
}

export default Skillbar
