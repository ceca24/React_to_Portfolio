import React from 'react';

export default function About() {

    return (
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello there, I'm César.
            <br className="hidden lg:inline-block" />I'm always fascinated with learning new things.
          </h1>
          <p className="mb-8 leading-relaxed">
          <br>
                ✨ I am a Texas native that has lived up and down the west coast for 4.5 years.
            </br>
            <br>
                ✨ Was enrolled in the University of Texas Coding Bootcamp to expand my knowledge in computer languages.
            </br>
            
            <br>
                ✨ I enjoy being challenged and working with diverse teams to solve any difficult problems with creative solutions.
            </br>

            <br>
                ✨ Hobbies currently include collecting stationery items, learning to draw, nature/urban walks, pin collecting, trying new cuisine (eating and cooking), and taking trips (either by road or by air) to anywhere.
            </br>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Connect With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Some Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./images/cesarselfie.png"
          />
        </div>
      </div>
    </section>
  );
} 
   