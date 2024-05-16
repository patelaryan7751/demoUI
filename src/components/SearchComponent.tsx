import React from "react";
import SearchTable from "./SearchContent/SearchTable";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const SearchComponent = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Search
            </h3>
          </div>
          <div className="inline-flex">
            <ShoppingCartIcon className="h-6 w-6 mr-2" /> Cart
          </div>
        </div>
        <SearchTable />
      </div>
    </>
  );
};

export default SearchComponent;
