import Image from "next/image";
import React from "react";

const SalesOverview = () => {
  return (
    <div className="row">
      {/* Left Column */}
      <div className="col-xl-8">
        <div className="card">
          <div className="card-body">
            <div className="float-end">
              <div className="dropdown">
                <a
                  className="dropdown-toggle text-reset"
                  href="#"
                  id="dropdownMenuButton5"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fw-semibold">Sort By:</span>
                  <span className="text-muted">
                    Yearly<i className="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton5"
                >
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </div>
              </div>
            </div>
            <h4 className="card-title mb-4">Sales Analytics</h4>
            <div className="mt-1">
              <ul className="list-inline main-chart mb-0">
                <li className="list-inline-item chart-border-left me-0 border-0">
                  <h3 className="text-primary">
                    $<span>2,371</span>
                    <span className="text-muted d-inline-block font-size-15 ms-3">
                      Income
                    </span>
                  </h3>
                </li>
                <li className="list-inline-item chart-border-left me-0">
                  <h3>
                    <span>258</span>
                    <span className="text-muted d-inline-block font-size-15 ms-3">
                      Sales
                    </span>
                  </h3>
                </li>
                <li className="list-inline-item chart-border-left me-0">
                  <h3>
                    <span>3.6</span>%
                    <span className="text-muted d-inline-block font-size-15 ms-3">
                      Conversation Ratio
                    </span>
                  </h3>
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <div
                id="sales-analytics-chart"
                data-colors='["--bs-primary", "#dfe2e6", "--bs-warning"]'
                className="apex-charts"
                dir="ltr"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-xl-4">
        {/* Campaign Upgrade Card */}
        <div className="card bg-primary">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-sm-8">
                <p className="text-white font-size-18">
                  Enhance your <b>Campaign</b> for better outreach{" "}
                  <i className="mdi mdi-arrow-right"></i>
                </p>
                <div className="mt-4">
                  <button className="btn btn-success waves-effect waves-light">
                    Upgrade Account!
                  </button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mt-4 mt-sm-0">
                  <Image
                    src="/assets/images/setup-analytics-amico.svg"
                    className="img-fluid"
                    alt="Analytics"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="card">
          <div className="card-body">
            <div className="float-end">
              <div className="dropdown">
                <a
                  className="dropdown-toggle text-reset"
                  href="#"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fw-semibold">Sort By:</span>
                  <span className="text-muted">
                    Yearly<i className="mdi mdi-chevron-down ms-1"></i>
                  </span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </div>
              </div>
            </div>
            <h4 className="card-title mb-4">Top Selling Products</h4>

            {[
              { name: "Desktops", color: "primary", width: 52 },
              { name: "iPhones", color: "info", width: 45 },
              { name: "Android", color: "success", width: 48 },
              { name: "Tablets", color: "warning", width: 78 },
              { name: "Cables", color: "purple", width: 63 },
            ].map((item, idx) => (
              <div className="row align-items-center g-0 mt-3" key={idx}>
                <div className="col-sm-3">
                  <p className="text-truncate mt-1 mb-0">
                    <i
                      className={`mdi mdi-circle-medium text-${item.color} me-2`}
                    ></i>{" "}
                    {item.name}
                  </p>
                </div>
                <div className="col-sm-9">
                  <div className="progress mt-1" style={{ height: "6px" }}>
                    <div
                      className={`progress-bar bg-${item.color}`}
                      role="progressbar"
                      style={{ width: `${item.width}%` }}
                      aria-valuenow={item.width}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
