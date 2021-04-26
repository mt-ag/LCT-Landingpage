/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { MailOpenIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import usePlausible from '../../hooks/usePlausible';

const NewsletterModal = ({ open, closeModal, email, setEmail }) => {
  const validEmail = email === '' || isEmail(email);

  const [approval, setApproval] = useState(false);

  const buttonDisabled = !validEmail || !approval || email === '';

  const plausible = usePlausible();

  // log opening of newsletter
  useEffect(() => {
    plausible('Newsletter-Modal');
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={closeModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-lightBlue-200">
                  <MailOpenIcon
                    className="h-6 w-6 text-lightBlue-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-300 text-center"
                  >
                    Subscribe to our Newsletter
                  </Dialog.Title>
                  <form action="#">
                    <div className="mt-5 mx-3">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className={`block w-full px-4 py-3 rounded-md border-0 text-base bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightBlue-500 ${
                            !validEmail
                              ? 'ring-inset ring-2 ring-red-500'
                              : null
                          }`}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span
                          className={`text-sm ${
                            validEmail ? 'invisible' : `text-red-300`
                          }`}
                        >
                          Please provide a valid E-Mail
                        </span>
                      </div>
                      <div className="max-w-lg mt-3">
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5 my-auto">
                            <input
                              id="approval"
                              name="approval"
                              type="checkbox"
                              className="focus:ring-lightBlue-500 focus:ring-offset-gray-700 h-4 w-4 text-lightBlue-600 bg-gray-700 border-gray-600 rounded"
                              value={approval}
                              onChange={(e) => setApproval(e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="approval"
                              className="font-medium text-gray-200"
                            >
                              Approval
                              <p className="text-gray-400 font-light">
                                I accept that my submitted data is processed and
                                saved in a database. My email address can be
                                used as a contact possibility (this approvement
                                can always be reclaimed through a formless
                                notification).
                              </p>
                            </label>
                            <p className="text-gray-400 font-light">
                              More information can be found in our{' '}
                              <a
                                href="https://www.mt-ag.com/datenschutz/"
                                className="text-gray-200 hover:underline focus:text-gray-400"
                              >
                                privacy policy
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightBlue-600 text-base font-medium text-white hover:bg-lightBlue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-400 focus:ring-offset-gray-700 sm:col-start-2 sm:text-sm disabled:bg-lightBlue-900 disabled:cursor-not-allowed disabled:text-gray-500"
                  onClick={() => closeModal()}
                  disabled={buttonDisabled}
                >
                  Subscribe
                </button>
                <button
                  type="submit"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-600 shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-700 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => closeModal()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

NewsletterModal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default NewsletterModal;
