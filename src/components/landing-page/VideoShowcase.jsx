import { PlayIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import ImageGetter from '../ImageGetter';
import usePlausible from '../../hooks/usePlausible';

const VideoShowcase = () => {
  const plausible = usePlausible();

  const videoEl = useRef(null);
  const videoOverlay = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    videoEl.current.play();
    videoOverlay.current.classList.add('hidden');
    plausible('Demovideo-Play');
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-md border-4 border-transparent bg-gradient-to-tl from-cyan-200 to-sky-500">
      <video className="w-full" controls preload="none" ref={videoEl}>
        <source src="/videos/lct-demo.webm" type="video/webm" />
        Your browser does not support videos.
      </video>
      <div ref={videoOverlay}>
        <button
          type="button"
          className="absolute left-0 top-0 z-40 mx-auto h-full w-full text-cyan-300/90 transition-colors duration-150 ease-in-out hover:text-cyan-600/75"
          onClick={handleClick}
          aria-label="Play Low Code Testing for Oracle APEX (LCT) Demo Video"
        >
          <div>
            <PlayIcon className="mx-auto h-48 w-48" />
          </div>
        </button>
        <div className="absolute left-0 top-0 z-30 mx-auto flex h-full w-full text-center ">
          <div className="z-30 self-end pb-2 pl-3 text-center font-sans text-2xl font-medium text-slate-100">
            LCT Oracle APEX Testing | Demo Video (12.6 MB)
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-20 h-2/3 bg-gradient-to-t from-black via-black/70 opacity-80"
          />
        </div>
        <div className="absolute left-0 top-0 z-10 mx-auto h-full w-full  text-center">
          <ImageGetter filename="lct-video-thumb.png" alt="" sizes="50vw" />
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
