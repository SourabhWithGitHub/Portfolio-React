import React from 'react'

const Skills = () => {
    return (
        <>
        <section id="skills">
            <div className='max-w-screen-2xl container mx-auto px-5 md:px-17 shadow-md pb-20' style={{ backgroundColor: '#3e3c58ff', color: '#E2DFF3' }}>

                <div className='flex h-auto justify-items-center justify-center items-center'>

                    <h1 className='flex md:mt-29 mt-20 md:mb-10 justify-items-center md:text-5xl text-3xl rounded-full justify-center text-center font-bold'><span className='text-teal-400'>Skills</span></h1>

                </div>


                <div className='flex flex-row justify-center items-start'>

                    <div className='grid h-118 grid-cols-1 place-content-between mt-20 pr-10 md:pr-20'>
                        <div className='flex flex-col p-4 rounded-xl outline-3 outline-offset-2 outline-teal-500 shadow-xl/30 hover:bg-emerald-800 duration-1000 hover:scale-110 duration-200'>
                            <h1 className='md:text-xl font-bold md:mb-5 mb-2 hover:scale-105 duration-200'>Programming Language</h1>
                            <div>
                                <p className='hover:scale-105 duration-200'>HTML</p>
                                <p className='hover:scale-105 duration-200'>CSS</p>
                                <p className='hover:scale-105 duration-200'>Java Script</p>
                                <p className='hover:scale-105 duration-200'>Python</p>
                            </div>

                        </div>
                        <div className='flex flex-col p-4 rounded-xl outline-3 outline-offset-2 outline-teal-500 shadow-xl/30 hover:bg-emerald-800 duration-1000 hover:scale-110 duration-200'>
                            <h1 className='text-xl font-bold md:mb-5 mb-2 hover:scale-105 duration-200'>Database</h1>
                            <div>
                                <p className='hover:scale-105 duration-200'>Mongo DB</p>
                            </div>
                        </div>

                    </div>

                    <div className='mt-72 grid h-115 grid-cols-1 place-content-between pl-5'>
                        <div className='flex flex-col p-4 rounded-xl outline-3 outline-offset-2 outline-teal-500 shadow-xl/30 hover:bg-sky-800 duration-1000 hover:scale-110 duration-200'>
                            <h1 className='text-xl font-bold md:mb-5 mb-2 hover:scale-105 duration-200'>Libraries / Frameworks</h1>
                            <div>
                                <p className='hover:scale-105 duration-200'>Tailwind CSS</p>
                                <p className='hover:scale-105 duration-200'>React Js</p>
                            </div>
                        </div>

                        <div className='flex flex-col p-4 rounded-xl outline-3 outline-offset-2 outline-teal-500 shadow-xl/30 hover:bg-sky-800 duration-1000 hover:scale-110 duration-200'>
                            <h1 className='text-xl font-bold md:mb-5 mb-2 hover:scale-105 duration-200'>Tools And Platforms</h1>
                            <div>
                                <p className='hover:scale-105 duration-200'>Github</p>
                                <p className='hover:scale-105 duration-200'>Figma</p>
                                <p className='hover:scale-105 duration-200'>VS Code</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            </section>
        </>
    )
}

export default Skills
