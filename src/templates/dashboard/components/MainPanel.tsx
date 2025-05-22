import React from "react";
import TopUsersCard from "./MainPanel/TopUsersCard";
import RecentActivityCard from "./MainPanel/RecentActivityCard";
import SocialSourceCard from "./MainPanel/SocialSourceCard";

const MainPanel = () => {
  return (
    <div className="row">
      <div className="col-xl-4">
        <TopUsersCard />
      </div>
      <div className="col-xl-4">
        <RecentActivityCard />
      </div>
      <div className="col-xl-4">
        <SocialSourceCard />
      </div>
    </div>
  );
};

export default MainPanel;
