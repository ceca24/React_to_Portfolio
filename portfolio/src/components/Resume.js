import { ChipIcon } from '@heroicons/react/solid';
import React from 'react';
//import { Resume } from '../data';

export default function Resume() {

    return (
        <section id="skills">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <ChipIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Resume
              </h1>
              <img src="../images/underconstruction.png" alt="Image description" />
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Resume is currently under construction. Please check back later.
              </p>
            </div>
          </div>
        </section>
      );
    }
