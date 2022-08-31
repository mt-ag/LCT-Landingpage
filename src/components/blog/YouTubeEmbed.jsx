import { Switch } from '@headlessui/react';
import PropTypes from 'prop-types';
import React from 'react';
import useExternalContentPrefs from '../../store/useExternalContentPrefs';
import classNames from '../../util/classNames';

const AllowYtSwitch = ({ youTube, handleSwitch }) => (
  <Switch.Group as="div" className="flex items-center">
    <Switch
      checked={youTube}
      onChange={handleSwitch}
      className={classNames(
        youTube ? 'bg-cyan-500' : 'bg-slate-300',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          youTube ? 'translate-x-5' : 'translate-x-0',
          'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      />
    </Switch>
    <Switch.Label
      as="span"
      className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300"
    >
      Allow external YouTube embeds
    </Switch.Label>
  </Switch.Group>
);

AllowYtSwitch.propTypes = {
  youTube: PropTypes.bool.isRequired,
  handleSwitch: PropTypes.func.isRequired,
};

const YouTubeEmbed = ({ videoID }) => {
  const { youTube, setYouTube } = useExternalContentPrefs();

  const handleSwitch = () => {
    setYouTube(!youTube);
  };

  return (
    <div className="my-6 ">
      {youTube ? (
        <>
          <iframe
            className="aspect-video w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="m-2">
            <AllowYtSwitch youTube={youTube} handleSwitch={handleSwitch} />
          </div>
        </>
      ) : (
        <div className="align-center flex aspect-video w-full justify-center bg-slate-100 p-8 dark:bg-slate-700">
          <div className="flex flex-col justify-center space-y-8">
            <AllowYtSwitch youTube={youTube} handleSwitch={handleSwitch} />
            <div className="border border-slate-300 dark:border-slate-800/50" />
            <a
              href={`https://www.youtube.com/watch?v=${videoID}`}
              className="text-base md:text-lg"
            >
              Watch directly on YouTube
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

YouTubeEmbed.propTypes = {
  videoID: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
