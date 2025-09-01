import React, { useState } from 'react';
import portfolioLogo from "../assets/portfollio.png";
import youtubeClone from "../assets/ytclon.png";
import uptalk from "../assets/uptalk.png";

const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const cardItems = [
    {
      id: 1,
      logo: portfolioLogo,
      name: "Portfolio",
      descr: "Built a fully responsive personal portfolio website using React.js",
      link: "https://github.com/SourabhWithGitHub/portfolio",
    },
    {
      id: 2,
      logo: youtubeClone,
      name: "YouTube Clone",
      descr: "Built a YouTube clone using React.js and YouTube API",
      link: "https://github.com/SourabhWithGitHub/YouTube-clone",
    },
    {
      id: 3,
      logo: uptalk,
      name: "UpTalk",
      descr: "Built a real-time chat application using React.js and Socket.io",
      link: "https://github.com/SourabhWithGitHub/UpTalk-socialmedia-application",
    },
  ];

  return (
    <>
      <section id="projects">
        <div className='max-w-screen-2xl container mx-auto px-5 md:px-17 shadow-md pb-30' style={{ backgroundColor: '#302f46ff', color: '#E2DFF3' }}>

          <div className="max-w-screen-2xl container mx-auto px-5">
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-12">
              <span className="text-teal-400">Projects</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {cardItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group h-80 rounded-xl shadow-lg overflow-hidden bg-sky-600 flex justify-center items-center"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${hoveredItem === item.id ? "opacity-20" : "opacity-100"
                      }`}
                  />

                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${hoveredItem === item.id ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                    <p className="text-gray-200 mb-4 px-4">{item.descr}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md shadow-md transition">
                          View Project
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
