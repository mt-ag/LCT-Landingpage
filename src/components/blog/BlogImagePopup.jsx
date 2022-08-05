import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import useImagePreview from '../../store/useImagePreview';

const BlogImagePopup = () => {
  const { isOpen, close, clear, imgSrc, alt, width, height } =
    useImagePreview();

  return (
    <Transition.Root appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isOpen}
        onClose={close}
      >
        <div
          className="min-h-screen px-4 pt-4 pb-20 text-center"
          style={{ maxHeight: '100vh' }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => clear()}
          >
            <Dialog.Overlay className="fixed inset-0 overflow-hidden backdrop-blur backdrop-filter transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="z-50 mt-8 inline-block transform select-none overflow-hidden rounded-lg bg-zinc-100 shadow-lg transition-all dark:bg-slate-700">
                  <div className="m-2 text-right">
                    <button
                      type="button"
                      className="rounded p-1 text-zinc-500 ring-inset hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:text-slate-200"
                      onClick={close}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="m-2 cursor-move bg-zinc-100 shadow-inner">
                    <TransformWrapper wheel={{ step: 12 }}>
                      <TransformComponent>
                        <img
                          width={width}
                          height={height}
                          src={imgSrc}
                          className="object-contain"
                          alt={alt}
                          style={{
                            maxWidth: '85vw',
                            maxHeight: '85vh',
                            width,
                            height,
                          }}
                        />
                      </TransformComponent>
                    </TransformWrapper>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BlogImagePopup;
