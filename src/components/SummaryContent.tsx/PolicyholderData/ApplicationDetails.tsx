import { ChevronRightIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import React from "react";
const ApplicationDetails = () => {
  const dataOwners = [
    {
      id: 1,
      name: "Emma Dorsey",
      imageUrl:
        "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Tom Cook",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];
  return (
    <>
      <div>
        <div className="mt-6 border-t border-gray-100">
          <div className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-sm font-medium leading-6 text-gray-900">
                Reference ID
              </div>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                2987654
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-sm font-medium leading-6 text-gray-900">
                Description
              </div>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-sm font-medium leading-6 text-gray-900">
                Status
              </div>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Active
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-sm font-medium leading-6 text-gray-900">
                Owners
              </div>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <div className="flex -space-x-0.5">
                  {dataOwners.map((owner: any) => (
                    <div key={owner.id}>
                      <img
                        className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                        src={owner.imageUrl}
                        alt={owner.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-sm font-medium leading-6 text-gray-900">
                Hierarchy
              </div>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 inline-flex">
                Policyholder Data <ChevronRightIcon className="h-3 w-3 m-2" />{" "}
                Personal Information{" "}
                <ChevronRightIcon className="h-3 w-3 m-2" /> Customer
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <div className="text-sm font-medium leading-6 text-gray-900">
                PII Data
              </div>
              <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Yes
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationDetails;
