import React from 'react';
import Iframe from 'react-iframe';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductDetailPage = () => {
  return (
    <div className="mx-auto max-w-[1320px]">
      <div className="mt-14">
        <div className="grid grid-cols-3 gap-6">
          {/* left */}
          <div className="col-span-2 flex flex-col gap-6">
            <div className="rounded-lg shadow-md ">
              <div className="bg-gray-200 px-4 py-1 rounded-t-lg flex flex-grow justify-between items-center">
                <div className="flex flex-row gap-2">
                  <span class="flex w-3 h-3 bg-red-500 rounded-full"></span>
                  <span class="flex w-3 h-3 bg-yellow-300 rounded-full"></span>
                  <span class="flex w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div>
                  <a href="##">
                    <button className="bg-white w-7 h-7 text-center align-middle rounded-md">
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        fontSize={12}
                      />
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <Iframe
                  url="https://bookworm-light-nextjs.vercel.app/"
                  width="100%"
                  height="600"
                />
              </div>
            </div>
            <div className="gap-2 flex flex-col bg-white rounded-lg shadow-md p-7 divide-y">
              <p className="text-[26px] font-semibold">Theme Description</p>
              <div className="pt-4">
                <p>
                  Bookworm Light is a minimal multi-author free nextjs blog
                  template. This highly customizable theme is ideal for creating
                  any type of blog website, including food, recipes, beauty,
                  lifestyle, photography, travel, health, fitness, and more.
                </p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-6">
            <div className="gap-2 flex flex-col bg-white rounded-lg shadow-md p-7">
              <p className="text-center text-[32px] font-semibold">
                Bookworm Light Nextjs
              </p>
              <p className="text-center text-[42px] font-bold text-indigo-600 mb-3">
                $79.00
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-center cursor-pointer rounded-md border border-indigo-600  py-3 px-6 text-md font-normal text-indigo-600 shadow-sm hover:bg-indigo-50500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Live Review
                </p>
                <p className="text-center cursor-pointer rounded-md border border-indigo-600 bg-indigo-600 py-3 px-6 text-md font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Free Download
                </p>
              </div>
            </div>

            <div className="gap-2 flex flex-col bg-white rounded-lg shadow-md p-7">
              <p className="text-center text-[26px] font-semibold">
                Theme Information
              </p>
              <div>
                <div className="mt-6 border-t border-gray-100 text-[17px]">
                  <dl className="divide-y divide-gray-100">
                    <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-normal leading-6 text-gray-900">
                        Downloads
                      </dt>
                      <dd className="mt-1 font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                        1406
                      </dd>
                    </div>
                    <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-normal leading-6 text-gray-900">
                        Updated
                      </dt>
                      <dd className="mt-1 font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                        7 Months Ago
                      </dd>
                    </div>
                    <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-normal leading-6 text-gray-900">
                        Released
                      </dt>
                      <dd className="mt-1 font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                        12 Months Ago
                      </dd>
                    </div>
                    <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-normal leading-6 text-gray-900">
                        License
                      </dt>
                      <dd className="mt-1 font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                        MIT
                      </dd>
                    </div>
                    <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-normal leading-6 text-gray-900">
                        Product Type
                      </dt>
                      <dd className="mt-1 font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                        NEXTJS
                      </dd>
                    </div>
                    <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-normal leading-6 text-gray-900">
                        Theme Version
                      </dt>
                      <dd className="mt-1 font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                        Stable 2.0.0
                      </dd>
                    </div>
                    <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-normal leading-6 text-gray-900">
                        Changelog
                      </dt>
                      <dd className="mt-1 font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-right">
                        <button
                          type="button"
                          class="text-white font-bold bg-green-700 hover:bg-green-800  focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                        >
                          Show
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </button>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
