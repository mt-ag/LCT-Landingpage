import PropTypes from 'prop-types';
import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/solid';
import authorsJson from '../../../content/blog/authors.json';
import ImageGetter from '../ImageGetter';
import svg from '../../svgs/link-to-svg';

export const AuthorDisplay = ({ authors }) => {
  const authorsData = authors.map((a) => authorsJson.find((b) => b.id === a));

  return (
    <>
      <div className="mb-2 text-center text-xl text-zinc-900 dark:text-slate-300">
        {authorsData.length > 1 ? 'Authors' : 'Author'}
      </div>
      <div className="grid grid-cols-1 space-y-5">
        {authorsData.map((a) => (
          <div key={a.id} className="flex">
            <ImageGetter
              filename={a.image}
              alt={`${a.name} portrait photo`}
              classes="w-1/3 m-3 shadow-md dark:shadow-none shadow-cyan-100 rounded-full select-none border-4 border-sky-500/60 dark:border-sky-500"
            />
            <div className="my-auto w-2/3 space-y-1 pl-3">
              <div className="text-md font-light text-gray-900 dark:text-slate-300">
                {a.name}
              </div>
              <div className="flex space-x-3">
                {a.twitter ? (
                  <a href={a.twitter}>
                    <svg
                      className="h-6 w-6 text-zinc-400 hover:text-[#1DA1F2] dark:text-slate-500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentcolor"
                    >
                      <path d={svg.twitter.path} />
                    </svg>
                  </a>
                ) : null}
                {a.blog ? (
                  <a href={a.blog}>
                    <GlobeAltIcon className="h-6 w-6 text-zinc-400 hover:text-emerald-400 dark:text-slate-500" />
                  </a>
                ) : null}
                {a.linkedIn ? (
                  <a href={a.linkedIn}>
                    <svg
                      className="h-6 w-6 text-zinc-400 hover:text-[#0e76a8] dark:text-slate-500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentcolor"
                    >
                      <path d={svg.linkedin.path} />
                    </svg>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

AuthorDisplay.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
