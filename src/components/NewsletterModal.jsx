/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { MailOpenIcon } from '@heroicons/react/solid';
import React, { Fragment, useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import usePlausible from '../hooks/usePlausible';
import useNewsletterStore from '../store/newsletterStore';

const approvalId = `newsletter_modal_approval`;
const emailId = `newsletter_modal_email`;
let opened = false;

const NewsletterModal = () => {
  const { isOpen, close, setEmail, email } = useNewsletterStore();

  const [error, setError] = useState('');
  const validEmail = email === '' || isEmail(email);

  const [approval, setApproval] = useState(false);

  const buttonDisabled = !validEmail || !approval || email === '';

  const plausible = usePlausible();

  const handleSubscribeClick = async () => {
    plausible('Newsletter-Subscribe');

    try {
      const url = process.env.NEWSLETTER_REGISTER_URL;

      const body = JSON.stringify({ email });

      const res = await fetch(url, {
        method: 'POST',
        headers: new Headers({
          accept: 'application/json',
          'content-type': 'application/json',
        }),
        body,
      });

      const result = await res.json();

      if (res.status === 200) {
        // eslint-disable-next-line no-console
        console.log(result);
        setEmail('');
        close();
      } else {
        setError(JSON.stringify(result));
      }
      setApproval(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError(`${err}`);
      setApproval(false);
    }
  };

  // log opening of newsletter
  useEffect(() => {
    if (isOpen && !opened) {
      plausible('Newsletter-Modal');
      opened = true;
    }
  }, [isOpen, plausible]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 z-50 overflow-y-auto"
        open={isOpen}
        onClose={close}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-700 bg-opacity-75 backdrop-blur-md transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
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
            <div
              className="inline-block transform overflow-hidden rounded-lg border border-zinc-600/60 bg-zinc-800 text-left align-bottom shadow-xl transition-all sm:w-full sm:max-w-lg sm:align-middle"
              style={{
                boxShadow: 'inset 0px 2px 3px rgba(255, 255, 255, 0.03)',
              }}
            >
              <div className="px-4 pt-5 sm:my-8 sm:px-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-200">
                    <MailOpenIcon
                      className="h-6 w-6 text-sky-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-center text-lg font-medium leading-6 text-zinc-300"
                    >
                      Subscribe to our Newsletter
                    </Dialog.Title>
                    <div className="mx-3 mt-5">
                      <div className="min-w-0 flex-1">
                        <label htmlFor={emailId} className="sr-only">
                          Email address
                        </label>
                        <input
                          id={emailId}
                          type="email"
                          placeholder="Enter your email"
                          className={`block w-full rounded-md border-0 bg-zinc-700 px-4 py-3 text-base text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 ${
                            !validEmail
                              ? 'ring-2 ring-inset ring-red-500'
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
                      <div className="mt-3 max-w-lg">
                        <div className="relative flex items-start">
                          <div className="my-auto flex h-5 items-center">
                            <input
                              id={approvalId}
                              name="approval"
                              type="checkbox"
                              className="h-4 w-4 rounded border-zinc-600 bg-zinc-700 text-sky-600 focus:ring-sky-500 focus:ring-offset-zinc-700"
                              checked={approval}
                              onChange={(e) => setApproval(e.target.checked)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor={approvalId}
                              className="font-medium text-zinc-200"
                            >
                              Approval
                              <p className="font-light text-zinc-400">
                                I accept that my submitted data is processed and
                                saved in a database. My email address can be
                                used as a contact possibility (this approvement
                                can always be reclaimed through a formless
                                notification).
                              </p>
                            </label>
                            <p className="font-light text-zinc-400">
                              More information can be found in our{' '}
                              <a
                                href="https://www.hyand.com/datenschutz/"
                                className="text-zinc-200 hover:underline focus:text-zinc-400"
                              >
                                privacy policy
                              </a>
                              .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {error ? (
                    <div className="mt-4 text-red-400">Error: {error}</div>
                  ) : null}
                </div>
              </div>
              <div className="bordert-t border-zinc-900 bg-zinc-900/50 px-4 py-4 sm:px-6">
                <div className="sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-zinc-700 disabled:cursor-not-allowed disabled:bg-sky-900 disabled:text-zinc-500 sm:col-start-2 sm:text-sm"
                    onClick={handleSubscribeClick}
                    disabled={buttonDisabled}
                  >
                    Subscribe
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-base font-medium text-zinc-300 shadow-sm hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-700 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NewsletterModal;
