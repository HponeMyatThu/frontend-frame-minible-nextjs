"use client";

import BreadCrum from "@/components/common/BreadCrum";
import { DashboardBreadCrum } from "@/utils/const/breadcrum";
import React from "react";
import DashboardFormStoreProvider from "./store";
import DashboardStatsCards from "./components/DashboardStatsCards";
import SalesOverview from "./components/SalesOverview";
import MainPanel from "./components/MainPanel";

const DashboardPage = () => {
  return (
    <>
      <BreadCrum title={"Dashboard"} items={DashboardBreadCrum} />
      <DashboardStatsCards />
      <SalesOverview />
      <MainPanel />
    </>
  );
};

const DashboardTemplate = () => {
  return (
    <DashboardFormStoreProvider>
      <DashboardPage />
    </DashboardFormStoreProvider>
  );
};

export default DashboardTemplate;
