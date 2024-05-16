import { ChevronUpIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";

const Summary = () => {
  return (
    <>
      <main>
        <div className="pl-96 border-b  bg-white shadow py-2">
          <div className="flex justify-between ">
            <div>
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Customer
              </h3>
            </div>
            <div className="inline-flex mr-4">
              <ShoppingCartIcon className="h-6 w-6 mr-2" /> Cart
            </div>
          </div>
        </div>
        <div className="flex justify-between pl-96 py-4">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900 mt-2">
              Summary
            </h3>
          </div>
          <div className="flex justify-between">
            <div className="mr-8">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Add to Cart
              </button>
            </div>
            <div className="my-2 mx-3">Last Updated:</div>
          </div>
        </div>
      </main>
      <aside className="fixed inset-y-0 left-64 hidden w-96 overflow-y-auto border-r border-gray-200 space-y-1 xl:block">
        <div className="bg-white shadow pl-12 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Search
          </h3>
        </div>
        <div className="bg-white shadow pl-12 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900 flex justify-between">
            Data Asset <ChevronUpIcon className="h-6 w-6 mr-6" />
          </h3>
        </div>
        <div className="bg-white shadow pl-12 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900 flex justify-between">
            Customer <ChevronUpIcon className="h-6 w-6 mr-6" />
          </h3>
        </div>
      </aside>
    </>
  );
};

export default Summary;
