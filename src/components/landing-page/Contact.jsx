import { MailIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import decodeMail from '../../util/decodeMail';
import ImageGetter from '../ImageGetter';

const Contact = () => {
  const [email, setEmail] = useState('loading...');

  useEffect(() => {
    setTimeout(() => {
      setEmail(decodeMail());
    }, 2000);
  }, [setEmail]);

  return (
    <>
      <h2
        id="contact"
        className="pt-8 text-center text-3xl font-extrabold tracking-tight lg:pt-16 lg:text-5xl bg-black"
      >
        Contact
      </h2>
      <div className="pb-16 pt-8 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-3xl">
          <div className="mx-4 rounded-xl bg-black p-6">
            {/* Center the container but keep internal items left-aligned */}
            <div className="flex flex-col mx-auto" style={{ width: "fit-content" }}>
              {/* Image container with fixed width */}
              <div className="w-64 max-w-full flex-shrink-0">
                <ImageGetter
                  filename="kdonato.jpg"
                  alt="Kai Donato Potrait"
                  classes="w-full h-auto rounded-md select-none border-2 border-hyand-blue"
                  sizes="20vw"
                />
              </div>
              
              {/* Text content below image - aligned left but same width as image */}
              <div className="w-full mt-4">
                <div className="text-left">
                  <p className="text-2xl font-semibold tracking-tight text-hyand-white lg:text-2xl">
                    Kai Donato
                  </p>
                  <p className="mt-2 text-white">Product Manager LCT</p>
                  <div className="inline-block">
                    <a
                      href="https://twitter.com/_kaidonato"
                      className="group mt-2 flex justify-start rounded py-2 pr-3 text-white focus:ring-2 focus:ring-sky-500 lg:mt-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="mr-3 text-zinc-400 group-hover:text-hyand-blue"
                      >
                        <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195a4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084a4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                      </svg>
                      @_KaiDonato
                    </a>
                  </div>
                </div>
                
                {/* Email button */}
                <div className="mt-5 text-left">
                  <div className="inline-block">
                    <a
                      href={`mailto:${email}`}
                      className="flex rounded-md bg-hyand-blue/80 px-3 py-3 text-xs font-semibold text-white shadow hover:bg-hyand-blue focus:outline-none
                   focus:ring-2 focus:ring-hyand-green focus:ring-offset-2 focus:ring-offset-white sm:text-base lg:px-6"
                    >
                      <MailIcon className="m-auto mr-1 h-5 w-5 text-gray-200/50 md:h-6 md:w-6 lg:mr-3" />
                      <span className="my-auto">{email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
