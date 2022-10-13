import React from 'react';

const Content = () => (
  <div className="h-full py-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        Content
      </h2>
      <div className="relative">
        <div className="grid grid-cols-2">
          <div>
            <h3>Blog Posts</h3>
          </div>
          <div>
            <h3>Find us</h3>
          </div>
        </div>
        <div className="absolute left-20 right-20 -top-px h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
        <div className="absolute left-20 right-20 -bottom-px h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
      </div>
    </div>
  </div>
);
export default Content;
