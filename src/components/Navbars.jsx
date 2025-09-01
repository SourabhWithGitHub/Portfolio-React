import React, { useState } from 'react';
import proPic from "../assets/logoSMremovebg.png";
import { CgMenu, CgClose } from "react-icons/cg";

function Navbars() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Educations", link: "#educations" },
    { id: 4, text: "Skills", link: "#skills" },
    { id: 5, text: "Projects", link: "#projects" },
    { id: 6, text: "Contacts", link: "#contacts" },
  ];

  return (
    <>
      <div style={{ backgroundColor: '#2F2D52', color: '#E2DFF3' }} className='max-w-screen-2xl container mx-auto px-5 lg:px-20 md:px-5 h-23 shadow-md fixed top-0 left-0 right-0 z-1'>

        <div className='flex justify-between items-center h-23'>

          <div className='flex space-x-5 justify-between items-center '>

            <img className='h-22 w-22 rounded-full' src={proPic} alt="logo" />

            <div className='w-40'>

              <h1 className='font-semibold text-2xl cursor-pointer'>Soura<span className='text-teal-500 text-2xl'>bh</span>
                <p className='text-sm w-27'>Web Developer</p>
              </h1>

            </div>
          </div>


          {/* desktop view */}
          <div>
            <ul className='hidden md:flex space-x-6'>
              {navItems.map(({ id, text, link }) => (
                <a href={link} key={id}>
                  <li className='hover:scale-105 duration-200 hover:drop-shadow-[0px_0px_6px_rgba(0,251,255,0.9)] cursor-pointer hover:text-teal-500 font-semibold text-xl'>
                    {text}
                  </li>
                </a>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className='md:hidden'>
              {menu ? <CgClose size={26} /> : <CgMenu size={26} />}
            </div>
          </div>
          {/* mobile view */}
          {menu && (
            <div style={{ backgroundColor: '#302e5bff', color: '#ebebebff' }} className='mt-70'>
              <ul className='md:hidden flex flex-col w-screen items-start justify-start space-y-6 text-2xl p-10'>
                {navItems.map(({ id, text, link }) => (
                  <a href={link} key={id}>
                    <li className='hover:scale-105 duration-200 cursor-pointer font-semibold hover:text-teal-500'>
                      {text}
                    </li>
                  </a>
                ))}
                </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbars;