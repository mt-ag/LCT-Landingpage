import PropTypes from 'prop-types';
import React from 'react';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';

export const PostStats = ({ date, formattedDate, timeToRead, tags }) => (
  <div className="grid grid-cols-1 space-y-4">
    <div className="flex items-center">
      <CalendarIcon className="mr-3 h-5 w-5 text-zinc-400 dark:text-slate-500" />
      <time dateTime={date}>{formattedDate}</time>
    </div>
    <div className="flex items-center">
      <ClockIcon className="mr-3 h-5 w-5 text-zinc-400 dark:text-slate-500" />
      {timeToRead} min
    </div>
    <div className="flex">
      <TagIcon className="mr-3 mt-2 h-5 w-5 text-zinc-400 dark:text-slate-500" />
      <ul className="list-none !pl-0">
        {tags.map((tag, i) => (
          <li className="!m-0 !pl-0" key={tag}>
            <Link to={`/blog/tag/${tag}`} key={tag}>
              {tag}
            </Link>
            {i <= tags.length - 2 ? <span> ,</span> : null}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

PostStats.propTypes = {
  date: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
