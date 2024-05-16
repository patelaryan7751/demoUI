import React from "react";
import Home from "./Home";
import { getCurrentPath } from "../utility/pathUtility";
import SearchComponent from "./SearchComponent";
import Orders from "./Orders";
import Summary from "./Summary";
const DashboardContent = () => {
  return (
    <>
      <main className="py-2 lg:pl-72">
        <div className="">
          {getCurrentPath() === "/home" ? <Home /> : <></>}
          {getCurrentPath() === "/search" ? <SearchComponent /> : <></>}
          {getCurrentPath() === "/orders" ? <Orders /> : <></>}
          {getCurrentPath().indexOf("/summary") !== -1 ? <Summary /> : <></>}
        </div>
      </main>
    </>
  );
};

export default DashboardContent;
