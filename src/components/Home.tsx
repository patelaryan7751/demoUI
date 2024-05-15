import React from "react";
import DashboardStats from "./HomeContent/DashboardStats";
import UtilDataProdStats from "./HomeContent/UtilDataProdStats";
import UtilDataDomains from "./HomeContent/UtilDataDomains";

const Home = () => {
  return (
    <>
      <div className="space-y-6">
        <DashboardStats />
        <UtilDataProdStats />
        <UtilDataDomains />
      </div>
    </>
  );
};

export default Home;
