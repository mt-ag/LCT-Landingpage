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
      <div className="mb-2 hidden text-center text-xl text-zinc-900 dark:text-slate-300 lg:block">
        {authorsData.length > 1 ? 'Authors' : 'Author'}
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-5">
        {authorsData.map((a) => (
          <div key={a.id} className="grid grid-cols-3 items-center gap-3">
            <div className="lg:m-2">
              <ImageGetter
                filename={a.image}
                alt={`${a.name} portrait photo`}
                classes="object-cover shadow-md dark:shadow-none shadow-cyan-100 rounded-full select-none border-4 border-sky-500/60 dark:border-sky-500"
              />
            </div>
            <div className="col-span-2 my-auto space-y-1">
              <div className="md:text-md text-xs font-light text-gray-900 dark:text-slate-300 sm:text-sm">
                {a.name}
              </div>
              <div className="flex space-x-3">
                {a.twitter ? (
                  <a
                    href={a.twitter}
                    className="text-zinc-400 hover:text-[#1DA1F2] dark:text-slate-500 dark:hover:text-[#1DA1F2]"
                  >
                    <svg
                      className="h-4 w-4 md:h-6 md:w-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentcolor"
                    >
                      <path d={svg.twitter.path} />
                    </svg>
                  </a>
                ) : null}
                {a.blog ? (
                  <a
                    href={a.blog}
                    className="text-zinc-400 hover:text-emerald-400 dark:text-slate-500 dark:hover:text-emerald-400"
                  >
                    <GlobeAltIcon className="h-4 w-4 md:h-6 md:w-6" />
                  </a>
                ) : null}
                {a.linkedIn ? (
                  <a
                    href={a.linkedIn}
                    className="text-zinc-400 hover:text-[#0e76a8] dark:text-slate-500 dark:hover:text-[#0e76a8]"
                  >
                    <svg
                      className="h-4 w-4 md:h-6 md:w-6"
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
