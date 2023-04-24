import { PlayIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import ImageGetter from '../ImageGetter';

const VideoShowcase = () => {
  const videoEl = useRef(null);
  const videoOverlay = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    videoEl.current.play();
    videoOverlay.current.classList.add('hidden');
  };

  return (
    <div className="mx-auto mt-4 mb-16 max-w-4xl lg:mt-8 lg:mb-32">
      <h2 className="mx-auto mb-12 w-5/6 text-center text-2xl font-extrabold tracking-tight text-white lg:w-full lg:text-5xl">
        LCT in Action
      </h2>
      <div className="mx-6">
        <div className="relative aspect-video overflow-hidden rounded-md">
          <video class="w-full" controls preload="none" ref={videoEl}>
            <source src="/videos/lct-demo.webm" type="video/webm" />
            Your browser does not support videos.
          </video>
          <div ref={videoOverlay}>
            <button
              type="button"
              className="absolute top-0 left-0 z-40 mx-auto h-full w-full text-cyan-300/90 transition-colors duration-150 ease-in-out hover:text-cyan-600/75"
              onClick={handleClick}
              aria-label={`Play Low Code Testing for Oracle APEX (LCT) Demo Video`}
            >
              <div>
                <PlayIcon className="mx-auto h-48 w-48" />
              </div>
            </button>
            <div className="absolute top-0 left-0 z-30 mx-auto flex h-full w-full text-center ">
              <div className="z-30 self-end pl-3 pb-2 text-center font-sans text-2xl font-medium text-slate-100">
                LCT Oracle APEX Testing | Demo Video (12.6 MB)
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 z-20 h-2/3 bg-gradient-to-t from-black via-black/70 opacity-80"
              />
            </div>
            <div className="absolute top-0 left-0 z-10 mx-auto h-full w-full  text-center">
              <ImageGetter filename="lct-video-thumb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-6">
        <p className="mt-2 text-white">Or watch this video on YouTube</p>
      </div>
    </div>
  );
};

export default VideoShowcase;
