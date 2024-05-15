import React from "react";
import Home from "./Home";
import { getCurrentPath } from "../utility/pathUtility";
import SearchComponent from "./SearchComponent";
import Orders from "./Orders";
const DashboardContent = () => {
  return (
    <>
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
          {getCurrentPath() === "/home" ? <Home /> : <></>}
          {getCurrentPath() === "/search" ? <SearchComponent /> : <></>}
          {getCurrentPath() === "/orders" ? <Orders /> : <></>}
        </div>
      </main>
    </>
  );
};

export default DashboardContent;
