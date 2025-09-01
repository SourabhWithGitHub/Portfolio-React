import React from 'react'

const Education = () => {
    return (
        <>
            <section id="educations">
                <div className='max-w-screen-2xl container mx-auto px-5 md:px-17 shadow-md pb-20' style={{ backgroundColor: '#302f46ff', color: '#E2DFF3' }}>

                    <div className='flex h-auto justify-items-center justify-center items-center'>

                        <h1 className='flex w-90 md:mt-29 mt-20 md:mb-10 justify-items-center md:text-5xl text-3xl rounded-full justify-center text-center font-bold'><span className='text-teal-400'>Education</span></h1>

                    </div>

                    <div className='ml-4 p-4'>
                        <h1 className='font-bold text-2xl'>My Journey</h1>
                    </div>

                    <div className='flex flex-col justify-start justify-items-start space-y-5 j'>

                        <div className='p-6 rounded-2xl outline-3 outline-offset-2 outline-teal-400 space-y-2 hover:bg-sky-800 duration-1000'>

                            <h1 className='font-bold text-2xl text-teal-400 hover:scale-101 duration-200'>
                                Graduation—(2022-25)
                            </h1>

                            <h2 className='font-bold text-xl text-teal-300 hover:scale-101 duration-200'>
                                Techno India Collage Of Technology
                            </h2>

                            <h3 className='font-bold text-lg hover:scale-101 duration-200'>
                                I have done my Garduation in BCA from Techno India Collage Of Technology formally known as Techno International New Town Rajarhat, Kolkata, West Bengal
                            </h3>

                        </div>

                        <div className='p-6 rounded-2xl outline-3 outline-offset-2 outline-teal-400 hover:bg-sky-800 duration-1000'>

                            <h1 className='font-bold text-2xl text-teal-400 hover:scale-101 duration-200'>
                                10+2—(2017-18)
                            </h1>

                            <h2 className='font-bold text-xl text-teal-300 hover:scale-101 duration-200'>
                                Suri Sree Sree Ramkrishna Vidyapith
                            </h2>

                            <h3 className='font-bold text-lg hover:scale-101 duration-200'>
                                I have done my 12th in Science from Suri Sree Sree Ramkrishna Vidyapith Suri, Birbhum, West Bengal in 2018
                            </h3>

                        </div>

                        <div className='p-6 rounded-2xl outline-3 outline-offset-2 outline-teal-400 hover:bg-sky-800 duration-1000'>

                            <h1 className='font-bold text-2xl text-teal-400 hover:scale-101 duration-200'>
                                10th— (2015)
                            </h1>

                            <h2 className='font-bold text-xl text-teal-300 hover:scale-101 duration-200'>
                                Bhabanipur Sambhunat High School
                            </h2>

                            <h3 className='font-bold text-lg hover:scale-101 duration-200'>
                                I have done my 10th from Bhabanipur Sambhunat High School Bhabanipur, Birbhum, West Bengal in 2015
                            </h3>

                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Education
