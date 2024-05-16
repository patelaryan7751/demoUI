import React from "react";
import MultiColumnSidebar from "./SummaryContent.tsx/PolicyholderData/MultiColumnSidebar";
import Header from "./SummaryContent.tsx/PolicyholderData/Hearder";
import PolicyholderDataContent from "./SummaryContent.tsx/PolicyholderData/PolicyholderDataContent";
import PolicySearchTable from "./SummaryContent.tsx/PolicyholderData/PolicySearchTable";

const Summary = () => {
  return (
    <>
      <main>
        <Header />
        <PolicyholderDataContent />
      </main>
      <MultiColumnSidebar />
    </>
  );
};

export default Summary;
