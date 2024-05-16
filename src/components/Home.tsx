import React from "react";
import DashboardStats from "./HomeContent/DashboardStats";
import UtilDataProdStats from "./HomeContent/UtilDataProdStats";
import UtilDataDomains from "./HomeContent/UtilDataDomains";

const Home = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <DashboardStats />
          <UtilDataProdStats />
          <UtilDataDomains />
        </div>
      </div>
    </>
  );
};

export default Home;
