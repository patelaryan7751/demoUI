import React from "react";
import ApplicationDetails from "./ApplicationDetails";
import PolicySearchTable from "./PolicySearchTable";

const PolicyholderDataContent = () => {
  return (
    <>
      <div className="pl-96 py-4">
        <div className="flex justify-between">
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
        <ApplicationDetails />
        <PolicySearchTable />
      </div>
    </>
  );
};

export default PolicyholderDataContent;
