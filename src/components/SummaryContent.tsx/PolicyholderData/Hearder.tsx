import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
