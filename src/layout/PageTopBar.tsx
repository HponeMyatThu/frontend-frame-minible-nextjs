import Image from "next/image";
import React from "react";

const PageTopBar = () => {
  if (typeof window !== "undefined") {
    return;
  }
  
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
              <span className="logo-sm">
                <img src="/assets/images/logo-sm.png" alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-dark.png" alt="" height="20" />
              </span>
            </a>

            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="/assets/images/logo-sm.png" alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-light.png" alt="" height="20" />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>

          {/* App Search */}
          <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <span className="uil-search"></span>
            </div>
          </form>
        </div>

        <div className="d-flex">
          {/* Mobile Search */}
          <div className="dropdown d-inline-block d-lg-none ms-2">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-search-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="uil-search"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="mdi mdi-magnify"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Language Switch */}
          <div className="dropdown d-inline-block language-switch">
            <button
              type="button"
              className="btn header-item waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="/assets/images/flags/us.jpg"
                alt="Header Language"
                height="16"
              />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {[
                { flag: "spain", label: "Spanish" },
                { flag: "germany", label: "German" },
                { flag: "italy", label: "Italian" },
                { flag: "russia", label: "Russian" },
              ].map((lang, i) => (
                <a key={i} href="#" className="dropdown-item notify-item">
                  <img
                    src={`/assets/images/flags/${lang.flag}.jpg`}
                    alt="user-language"
                    className="me-1"
                    height="12"
                  />{" "}
                  <span className="align-middle">{lang.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Apps Dropdown */}
          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="uil-apps"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <div className="px-lg-2">
                <div className="row g-0">
                  {["github", "bitbucket", "dribbble"].map((app, i) => (
                    <div className="col" key={i}>
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src={`/assets/images/brands/${app}.png`}
                          alt={app}
                        />
                        <span>
                          {app.charAt(0).toUpperCase() + app.slice(1)}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="row g-0">
                  {["dropbox", "mail_chimp", "slack"].map((app, i) => (
                    <div className="col" key={i}>
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src={`/assets/images/brands/${app}.png`}
                          alt={app}
                        />
                        <span>
                          {app
                            .replace("_", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fullscreen */}
          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              data-bs-toggle="fullscreen"
            >
              <i className="uil-minus-path"></i>
            </button>
          </div>

          {/* Notifications */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-notifications-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="uil-bell"></i>
              <span className="badge bg-danger rounded-pill">3</span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-notifications-dropdown"
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="m-0 font-size-16">Notifications</h5>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="small">
                      Mark all as read
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ maxHeight: "230px", overflowY: "auto" }}>
                {/* Example Notification */}
                <a href="#" className="text-reset notification-item">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="uil-shopping-basket"></i>
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Your order is placed</h6>
                      <div className="font-size-12 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* User profile icon */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Image
                src="/assets/images/users/avatar-4.jpg"
                alt="Header Avatar"
                width={40}
                height={40}
                className="rounded-circle header-profile-user"
              />
              <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
                Marcus
              </span>
              <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">
                <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>{" "}
                <span className="align-middle">View Profile</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="uil uil-wallet font-size-18 align-middle me-1 text-muted"></i>{" "}
                <span className="align-middle">My Wallet</span>
              </a>
              <a className="dropdown-item d-block" href="#">
                <i className="uil uil-cog font-size-18 align-middle me-1 text-muted"></i>{" "}
                <span className="align-middle">Settings</span>{" "}
                <span className="badge bg-soft-success rounded-pill mt-1 ms-2">
                  03
                </span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted"></i>{" "}
                <span className="align-middle">Lock screen</span>
              </a>
              <a className="dropdown-item" href="#">
                <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>{" "}
                <span className="align-middle">Sign out</span>
              </a>
            </div>
          </div>

          {/* Setting */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon right-bar-toggle waves-effect"
            >
              <i className="uil-cog"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageTopBar;
