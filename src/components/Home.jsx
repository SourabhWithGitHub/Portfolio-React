import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaReact, FaNodeJs, } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

import { ReactTyped, Typed } from "react-typed";
import heroPic from "../assets/photo_removebg.png"
import '../../src/index.css'


const Home = () => {
    return (
        <>
            <section id="home">
                <div className='max-w-screen-2xl container mx-auto px-5 md:px-17 md:my-20 mb-20 shadow-md pb-25' style={{ backgroundColor: '#302f46ff', color: '#E2DFF3' }}>

                    <div className='flex flex-col md:flex-row'>

                        <div className='md:w-1/2 mt-10 md:mt-18 md:order-2 order-2'>

                            <div className='flex flex-col space-y-2'>
                                <h1 className='space-x-2 text-3xl font-semibold'>Hi, I'm <br /><span className='text-teal-500 text-4xl font-bold'>Sourabh Mondal</span></h1>
                                <div className='flex flex-row space-x-1 text-2xl'>
                                    <p className='font-bold'>I'm a</p>
                                    <ReactTyped className='text-teal-400 font-bold'
                                        strings={["Web developer", "Programmer", "Photographer"]}
                                        typeSpeed={40}
                                        backSpeed={50}
                                        loop={true}
                                    />
                                </div>
                            </div>

                            <br />

                            <div className='h-40'>
                                <p className='font-semibold text-lg md:text-md text-justify'>
                                    Front-end developer, with a diverse range of skills including HTML, CSS, Tailwind, Java Script, React Js, ..
                                </p>
                            </div>

                            <br />

                            <div className='flex justify-center mt-4 -mt-40 md:mt-1'>
                                <a href="src/files/sourabhMondalResume.pdf" target="_blank" download>
                                    <button className='h-[50px] w-[150px] rounded-full outline-3 outline-offset-2 outline-fuchsia-500 bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white font-bold animate-bounce hover:animate-none cursor-pointer'>
                                        My Resume
                                    </button>
                                </a>
                            </div>

                            <br />
                            <br />
                            {/* social handels */}
                            <div className='flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>

                                <div className='pr-1'>
                                    <h1 className='font-bold text-center text-xl'>Available on</h1>
                                    <ul className='flex space-x-6 mt-3 text-xl'>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100004795518759" target='_blank'>
                                                <FaFacebook className='text-3xl cursor-pointer text-blue-500 hover:scale-120 transition duration-600 ease-in-out' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/sourabh-mondal-063734381" target='_blank'>
                                                <FaLinkedin className='text-3xl cursor-pointer text-blue-700 hover:scale-120 transition duration-600 ease-in-out' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/______sourabh_______/" target='_blank'>
                                                <FaInstagram className='text-3xl cursor-pointer text-pink-600 hover:scale-120 transition duration-600 ease-in-out' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/SourabhWithGitHub" target='_blank'>
                                                <FaGithub className='text-3xl cursor-pointer text-black-800 hover:scale-120 transition duration-600 ease-in-out' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='md:pl-12'>
                                    <h1 className='font-bold text-center text-xl'>Currently working</h1>
                                    <ul className='flex space-x-6 mt-3 text-xl'>
                                        <li>
                                            <FaReact className='text-3xl text-blue-500 hover:scale-120 transition duration-600 ease-in-out' />
                                        </li>
                                        <li>
                                            <SiMongodb className='text-3xl text-green-700 hover:scale-120 transition duration-600 ease-in-out' />
                                        </li>
                                        <li>
                                            <SiTailwindcss className='text-3xl text-blue-500 hover:scale-120 transition duration-600 ease-in-out' />
                                        </li>
                                        <li>
                                            <FaNodeJs className='text-3xl text-green-500 hover:scale-120 transition duration-600 ease-in-out' />
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        <div className='flex md:w-1/2 md:ml-5 mt-30 md:order-2 order-1 justify-around'>
                            <img className='md:h-[380px] md:w-[290px] rounded-b-3xl md:rounded-full' src={heroPic} alt="pic" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
