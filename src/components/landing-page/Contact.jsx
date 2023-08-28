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
        className="pt-8 text-center text-3xl font-extrabold tracking-tight text-zinc-900 lg:pt-16 lg:text-5xl"
      >
        Contact
      </h2>
      <div className="pb-16 pt-8 lg:pb-32 lg:pt-16">
        <div className="mx-4 grid grid-cols-1 rounded-xl bg-white p-6 shadow-xl sm:grid-cols-3 md:p-8 lg:mx-0">
          <ImageGetter
            filename="kdonato.jpg"
            alt="Kai Donato Potrait"
            classes="w-full sm:w-32 md:w-48 md:h-48 lg:h-64 lg:w-64 rounded-md select-none"
            sizes="20vw"
          />
          <div className="mt-4 sm:mt-0">
            <p className="text-2xl font-semibold tracking-tight text-mt-blue lg:text-3xl">
              Kai Donato
            </p>
            <p className="mt-2 text-zinc-700">Product Manager LCT</p>
            <div className="inline-block">
              <a
                href="https://twitter.com/_kaidonato"
                className="group mt-2 flex rounded py-2 pr-3 text-zinc-600 focus:ring-2 focus:ring-sky-500 lg:mt-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="mr-3 text-zinc-400 group-hover:text-sky-400"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                </svg>
                @_KaiDonato
              </a>
            </div>
          </div>
          <div className="lg:p5-0 m-auto pt-5">
            <div className="inline-block">
              <a
                href={`mailto:${email}`}
                className="flex rounded-md bg-mt-green px-3 py-3 text-center text-xs font-semibold text-white shadow hover:bg-mt-green/80 focus:outline-none
             focus:ring-2 focus:ring-mt-darkgreen focus:ring-offset-2 focus:ring-offset-white sm:text-base lg:px-6"
              >
                <MailIcon className="m-auto mr-1 h-5 w-5 text-gray-200/50 md:h-6 md:w-6 lg:mr-3" />
                <span className="my-auto">{email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
