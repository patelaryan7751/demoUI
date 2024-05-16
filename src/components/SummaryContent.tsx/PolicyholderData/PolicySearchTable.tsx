import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
const PolicySearchTable = () => {
  const [search, setSearch] = useState<string>("");
  const [searchStatusMsg, setSearchStatusMsg] = useState<boolean>(false);
  const handleFeildChange = (value: string) => {
    setSearch(value);
  };
  const handleSearch = () => {
    if (search.trim() !== "") {
      setSearchStatusMsg(true);
    }
  };
  const clearSearch = () => {
    setSearch("");
    setSearchStatusMsg(false);
  };
  const people = [
    {
      id: 1,
      name: "Name",
      desc: "Name of the customer",
      typeOfData: "Data Element",
      aggregateDataQuality: 0,
      piiData: "No",
      dataOwners: [
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
      ],
    },
    {
      id: 2,
      name: "SSN",
      desc: "SSN of the customer",
      typeOfData: "Business Term",
      aggregateDataQuality: 0,
      piiData: "Yes",
      dataOwners: [
        {
          id: 3,
          name: "Lindsay Walton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  onChange={(e: any) => handleFeildChange(e.target.value)}
                  value={search}
                  placeholder="Provide keywords to search"
                  className="block w-3/4 rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  className="rounded-full m-2 bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleSearch}
                >
                  Search
                </button>
                <button onClick={clearSearch} type="button">
                  Clear Search
                </button>
              </div>
              <button
                type="button"
                className="rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                + Filters
              </button>
            </div>
          </div>
        </div>
        {searchStatusMsg ? (
          <>
            <h3 className="text-base font-semibold leading-6 text-gray-900 mx-1 my-4">
              Search Result for `{search}` in ..
            </h3>
          </>
        ) : (
          <></>
        )}

        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3 whitespace-nowrap"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                    >
                      Type of Data
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                    >
                      Aggregate Data quality
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                    >
                      PII Data
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                    >
                      Data Owners
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {people.map((person) => (
                    <tr key={person.id} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.desc}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.typeOfData}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 inline-flex">
                        {/* <StarIcon className="h-6 w-6 text-black" />
                        <StarIcon className="h-6 w-6 text-black" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg> */}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.piiData}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex -space-x-0.5">
                          {person.dataOwners.map((owner: any) => (
                            <dd key={owner.id}>
                              <img
                                className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                                src={owner.imageUrl}
                                alt={owner.name}
                              />
                            </dd>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicySearchTable;
