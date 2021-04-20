import { MailIcon } from '@heroicons/react/outline';
import React from 'react';
import ImageGetter from '../ImageGetter';

const Contact = () => (
  <>
    <h2 className="text-gray-900 text-center pt-16 text-5xl tracking-tight font-extrabold">
      Contact
    </h2>
    <div className="pb-32 pt-16">
      <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-3">
        <div>
          <ImageGetter
            filename="lct-contact-kai-donato.jpg"
            alt="Kai Donato Potrait"
            classes="h-64 w-64 rounded select-none"
          />
        </div>
        <div>
          <p className="text-3xl text-lightBlue-600 tracking-tight font-semibold">
            Kai Donato
          </p>
          <p className="text-gray-700 mt-2">Product Manager LCT</p>
          <a href="https://twitter.com/_kaidonato">
            {/* <TwitterLogo /> */}
            @_KaiDonato
          </a>
        </div>
        <div className="m-auto">
          <div className="inline-block">
            <a
              href="mailto:Kai.Donato@mt-ag.com"
              className="flex text-center py-3 px-6 rounded-md shadow bg-black text-white font-medium
             hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-white"
            >
              <MailIcon className="h-6 w-6 text-gray-400 mr-3" />
              <span>Kai.Donato@mt-ag.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
