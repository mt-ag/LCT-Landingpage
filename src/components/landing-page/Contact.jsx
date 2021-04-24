import { MailIcon } from '@heroicons/react/outline';
import React from 'react';
import ImageGetter from '../ImageGetter';

const Contact = () => (
  <>
    <h2 className="text-gray-900 text-center pt-8 lg:pt-16 text-3xl lg:text-5xl tracking-tight font-extrabold">
      Contact
    </h2>
    <div className="pt-8 pb-16 lg:pb-32 lg:pt-16">
      <div className="bg-white mx-4 lg:mx-0 p-6 md:p-8 rounded-lg shadow-xl grid grid-cols-1 sm:grid-cols-3">
        <ImageGetter
          filename="lct-contact-kai-donato.jpg"
          alt="Kai Donato Potrait"
          classes="w-full sm:w-32 md:w-48 md:h-48 lg:h-64 lg:w-64 rounded select-none"
        />
        <div className="mt-4 sm:mt-0">
          <p className="text-2xl lg:text-3xl text-lightBlue-600 tracking-tight font-semibold">
            Kai Donato
          </p>
          <p className="text-gray-700 mt-2">Product Manager LCT</p>
          <div className="inline-block">
            <a
              href="https://twitter.com/_kaidonato"
              className="flex mt-2 lg:mt-5 text-gray-600 focus:ring-2 focus:ring-lightBlue-500 py-2 pr-3 rounded group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-gray-400 mr-3 group-hover:text-lightBlue-400"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
              </svg>
              @_KaiDonato
            </a>
          </div>
        </div>
        <div className="pt-5 lg:p5-0 m-auto">
          <div className="inline-block">
            <a
              href="mailto:Kai.Donato@mt-ag.com"
              className="flex text-center py-3 px-3 text-xs sm:text-base lg:px-6 rounded-md shadow bg-black text-white font-medium
             hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-white"
            >
              <MailIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-400 mr-1 lg:mr-3 m-auto" />
              <span className="my-auto">Kai.Donato@mt-ag.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
