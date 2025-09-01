import React from 'react'
import heroPic from "../assets/photo_removebg.png"


const About = () => {
  return (
    <>
      <section id="about">
        <div className='max-w-screen-2xl container mx-auto px-5 md:px-17 mt-[-80px] shadow-md pb-30' style={{ backgroundColor: '#3e3c58ff', color: '#E2DFF3' }}>

          <div className='flex h-auto justify-items-center justify-center items-center'>
            <h1 className='flex w-90 md:mt-29 mt-20 md:mb-10 justify-items-center md:text-5xl text-3xl rounded-full justify-center text-center font-bold space-x-4'><span className='text-teal-400'>About</span><span className='text-teal-400'>Me</span></h1>
          </div>

          <div className='flex flex-col md:flex-row p-10'>

            <div className='flex md:w-1/3 justify-center items-center'>
              <img className='hidden p-5 md:block h-xl w-xl rounded-4xl items-center object-scale-down' src={heroPic} alt="pic" />
            </div>

            <div className='flex md:w-2/3'>
              <p className='flex container pt-10 md:pr-10 md:pl-10 md:pt-10 md:text-md text-lg md:text-justify font-semibold justify-center items-center'>
                Hello!!.. and welcome to my portfolio!
                I'm Sourabh Mondal, a student at Techno India College of Technology with a strong passion for Web Development. I am eager to begin my professional journey in this field, contributing to impactful projects where I can learn, grow and refine my skills.
                <br />
                {/* <br /> */}
                Here, you will find some of my wkork that demonstrate my dedication, creativity, and technical skills. I am enthusiastic about opportunities that challenge me, help me innovate, and allow me to evolve into a proficient developer.
                <br />
                <br />
                Thank you for visiting my portfolio—I look forward to connecting and exploring how I can contribute to your success.
              </p>
            </div>


          </div>

        </div>
      </section>
    </>
  )
}

export default About
