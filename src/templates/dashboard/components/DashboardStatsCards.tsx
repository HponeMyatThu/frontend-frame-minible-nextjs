"use client";

import React from "react";

const DashboardStatsCards: React.FC = () => {
  return (
    <div className="row">
      {/* Total Revenue */}
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div
                id="total-revenue-chart"
                data-colors='["--bs-primary"]'
              ></div>
            </div>
            <div>
              <h4 className="mb-1 mt-1">
                $<span data-plugin="counterup">34,152</span>
              </h4>
              <p className="text-muted mb-0">Total Revenue</p>
            </div>
            <p className="text-muted mt-3 mb-0">
              <span className="text-success me-1">
                <i className="mdi mdi-arrow-up-bold me-1"></i>2.65%
              </span>{" "}
              since last week
            </p>
          </div>
        </div>
      </div>

      {/* Orders */}
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="orders-chart" data-colors='["--bs-success"]'></div>
            </div>
            <div>
              <h4 className="mb-1 mt-1">
                <span data-plugin="counterup">5,643</span>
              </h4>
              <p className="text-muted mb-0">Orders</p>
            </div>
            <p className="text-muted mt-3 mb-0">
              <span className="text-danger me-1">
                <i className="mdi mdi-arrow-down-bold me-1"></i>0.82%
              </span>{" "}
              since last week
            </p>
          </div>
        </div>
      </div>

      {/* Customers */}
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="customers-chart" data-colors='["--bs-primary"]'></div>
            </div>
            <div>
              <h4 className="mb-1 mt-1">
                <span data-plugin="counterup">45,254</span>
              </h4>
              <p className="text-muted mb-0">Customers</p>
            </div>
            <p className="text-muted mt-3 mb-0">
              <span className="text-danger me-1">
                <i className="mdi mdi-arrow-down-bold me-1"></i>6.24%
              </span>{" "}
              since last week
            </p>
          </div>
        </div>
      </div>

      {/* Growth */}
      <div className="col-md-6 col-xl-3">
        <div className="card">
          <div className="card-body">
            <div className="float-end mt-2">
              <div id="growth-chart" data-colors='["--bs-warning"]'></div>
            </div>
            <div>
              <h4 className="mb-1 mt-1">
                + <span data-plugin="counterup">12.58</span>%
              </h4>
              <p className="text-muted mb-0">Growth</p>
            </div>
            <p className="text-muted mt-3 mb-0">
              <span className="text-success me-1">
                <i className="mdi mdi-arrow-up-bold me-1"></i>10.51%
              </span>{" "}
              since last week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsCards;
