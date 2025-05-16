import Navigation from "@/components/i18n/Navigation";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">Starter Page</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Utility</a>
                    </li>
                    <li className="breadcrumb-item active">Starter Page</li>
                    <Navigation />
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* end page title */}
        </div>
        {/* container-fluid */}
      </div>
      {/* End Page-content */}

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              {new Date().getFullYear()} © Minible.
            </div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Crafted with <i className="mdi mdi-heart text-danger"></i> by{" "}
                <a
                  href="https://themesbrand.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-reset"
                >
                  Themesbrand
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
