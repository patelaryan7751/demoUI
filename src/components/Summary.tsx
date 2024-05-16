import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";

const Summary = () => {
  return (
    <>
      <main>
        <div className="pl-96">
          <div className="">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Search
            </h3>
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
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Customer
          </h3>
        </div>
      </aside>
    </>
  );
};

export default Summary;
