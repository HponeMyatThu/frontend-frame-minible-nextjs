import { AppRoute } from "@/utils/app.routes";
import Link from "next/link";
import React from "react";

const VerticalMenu = () => {
  if (typeof window !== "undefined") {
    return;
  }

  return (
    <div className="vertical-menu">
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

        <a href="#" className="logo logo-light">
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

      <div data-simplebar className="sidebar-menu-scroll">
        {/* SIDEMENU */}
        <div id="sidebar-menu">
          {/* Left Menu Start */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>
            <li>
              <Link href={AppRoute().DashboardPage}>
                <i className="uil-home-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-window-section"></i>
                <span>Layouts</span>
              </a>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <a href="#" className="has-arrow">
                    Vertical
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="layouts-dark-sidebar.html">Dark Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-compact-sidebar.html">Compact Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-icon-sidebar.html">Icon Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-boxed.html">Boxed Width</a>
                    </li>
                    <li>
                      <a href="layouts-preloader.html">Preloader</a>
                    </li>
                    <li>
                      <a href="layouts-colored-sidebar.html">Colored Sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="has-arrow">
                    Horizontal
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="layouts-horizontal.html">Horizontal</a>
                    </li>
                    <li>
                      <a href="layouts-hori-topbar-dark.html">Topbar Dark</a>
                    </li>
                    <li>
                      <a href="layouts-hori-boxed-width.html">Boxed Width</a>
                    </li>
                    <li>
                      <a href="layouts-hori-preloader.html">Preloader</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="menu-title">Apps</li>

            <li>
              <Link href="/views/calendar" className="waves-effect">
                <i className="uil-calender"></i>
                <span>Calendar</span>
              </Link>
            </li>

            <li>
              <a href="chat.html" className=" waves-effect">
                <i className="uil-comments-alt"></i>
                <span>Chat</span>
              </a>
            </li>

            <li>
              <a href="file-manager.html" className=" waves-effect">
                <i className="uil-comments-alt"></i>
                <span className="badge rounded-pill bg-success float-end">
                  New
                </span>
                <span>File Manager</span>
              </a>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-store"></i>
                <span>Ecommerce</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="ecommerce-products.html">Products</a>
                </li>
                <li>
                  <a href="ecommerce-product-detail.html">Product Detail</a>
                </li>
                <li>
                  <a href="ecommerce-orders.html">Orders</a>
                </li>
                <li>
                  <a href="ecommerce-customers.html">Customers</a>
                </li>
                <li>
                  <a href="ecommerce-cart.html">Cart</a>
                </li>
                <li>
                  <a href="ecommerce-checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="ecommerce-shops.html">Shops</a>
                </li>
                <li>
                  <a href="ecommerce-add-product.html">Add Product</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-envelope"></i>
                <span>Email</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="email-inbox.html">Inbox</a>
                </li>
                <li>
                  <a href="email-read.html">Read Email</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-invoice"></i>
                <span>Invoices</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="invoices-list.html">Invoice List</a>
                </li>
                <li>
                  <a href="invoices-detail.html">Invoice Detail</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-book-alt"></i>
                <span>Contacts</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="contacts-grid.html">User Grid</a>
                </li>
                <li>
                  <a href="contacts-list.html">User List</a>
                </li>
                <li>
                  <a href="contacts-profile.html">Profile</a>
                </li>
              </ul>
            </li>

            <li className="menu-title">Pages</li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-user-circle"></i>
                <span>Authentication</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="auth-login.html">Login</a>
                </li>
                <li>
                  <a href="auth-register.html">Register</a>
                </li>
                <li>
                  <a href="auth-recoverpw.html">Recover Password</a>
                </li>
                <li>
                  <a href="auth-lock-screen.html">Lock Screen</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-file-alt"></i>
                <span>Utility</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="pages-starter.html">Starter Page</a>
                </li>
                <li>
                  <a href="pages-maintenance.html">Maintenance</a>
                </li>
                <li>
                  <a href="pages-comingsoon.html">Coming Soon</a>
                </li>
                <li>
                  <a href="pages-timeline.html">Timeline</a>
                </li>
                <li>
                  <a href="pages-faqs.html">FAQs</a>
                </li>
                <li>
                  <a href="pages-pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="pages-404.html">Error 404</a>
                </li>
                <li>
                  <a href="pages-500.html">Error 500</a>
                </li>
              </ul>
            </li>

            <li className="menu-title">Components</li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-flask"></i>
                <span>UI Elements</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="ui-buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="ui-cards.html">Cards</a>
                </li>
                <li>
                  <a href="ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="ui-dropdowns.html">Dropdowns</a>
                </li>
                <li>
                  <a href="ui-grid.html">Grid</a>
                </li>
                <li>
                  <a href="ui-images.html">Images</a>
                </li>
                <li>
                  <a href="ui-lightbox.html">Lightbox</a>
                </li>
                <li>
                  <a href="ui-modals.html">Modals</a>
                </li>
                <li>
                  <a href="ui-offcanvas.html">Offcanvas</a>
                </li>
                <li>
                  <a href="ui-rangeslider.html">Range Slider</a>
                </li>
                <li>
                  <a href="ui-session-timeout.html">Session Timeout</a>
                </li>
                <li>
                  <a href="ui-progressbars.html">Progress Bars</a>
                </li>
                <li>
                  <a href="ui-placeholders.html">Placeholders</a>
                </li>
                <li>
                  <a href="ui-sweet-alert.html">Sweet-Alert</a>
                </li>
                <li>
                  <a href="ui-tabs-accordions.html">Tabs & Accordions</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-utilities.html">
                    Utilities
                    <span className="badge rounded-pill bg-success float-end">
                      New
                    </span>
                  </a>
                </li>
                <li>
                  <a href="ui-toasts.html">Toasts</a>
                </li>
                <li>
                  <a href="ui-video.html">Video</a>
                </li>
                <li>
                  <a href="ui-general.html">General</a>
                </li>
                <li>
                  <a href="ui-colors.html">Colors</a>
                </li>
                <li>
                  <a href="ui-rating.html">Rating</a>
                </li>
                <li>
                  <a href="ui-notifications.html">Notifications</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="waves-effect">
                <i className="uil-shutter-alt"></i>
                <span className="badge rounded-pill bg-info float-end">9</span>
                <span>Forms</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="form-elements.html">Basic Elements</a>
                </li>
                <li>
                  <a href="form-validation.html">Validation</a>
                </li>
                <li>
                  <a href="form-advanced.html">Advanced Plugins</a>
                </li>
                <li>
                  <a href="form-editors.html">Editors</a>
                </li>
                <li>
                  <a href="form-uploads.html">File Upload</a>
                </li>
                <li>
                  <a href="form-xeditable.html">Xeditable</a>
                </li>
                <li>
                  <a href="form-repeater.html">Repeater</a>
                </li>
                <li>
                  <a href="form-wizard.html">Wizard</a>
                </li>
                <li>
                  <a href="form-mask.html">Mask</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-list-ul"></i>
                <span>Tables</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="tables-basic.html">Bootstrap Basic</a>
                </li>
                <li>
                  <a href="tables-datatable.html">Datatables</a>
                </li>
                <li>
                  <a href="tables-responsive.html">Responsive</a>
                </li>
                <li>
                  <a href="tables-editable.html">Editable</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-chart"></i>
                <span>Charts</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="charts-apex.html">Apex</a>
                </li>
                <li>
                  <a href="charts-chartjs.html">Chartjs</a>
                </li>
                <li>
                  <a href="charts-flot.html">Flot</a>
                </li>
                <li>
                  <a href="charts-knob.html">Jquery Knob</a>
                </li>
                <li>
                  <a href="charts-sparkline.html">Sparkline</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-streering"></i>
                <span>Icons</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="icons-unicons.html">Unicons</a>
                </li>
                <li>
                  <a href="icons-boxicons.html">Boxicons</a>
                </li>
                <li>
                  <a href="icons-materialdesign.html">Material Design</a>
                </li>
                <li>
                  <a href="icons-dripicons.html">Dripicons</a>
                </li>
                <li>
                  <a href="icons-fontawesome.html">Font Awesome</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-location-point"></i>
                <span>Maps</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="maps-google.html">Google</a>
                </li>
                <li>
                  <a href="maps-vector.html">Vector</a>
                </li>
                <li>
                  <a href="maps-leaflet.html">Leaflet</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="has-arrow waves-effect">
                <i className="uil-share-alt"></i>
                <span>Multi Level</span>
              </a>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <a href="#">Level 1.1</a>
                </li>
                <li>
                  <a href="#" className="has-arrow">
                    Level 1.2
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="#">Level 2.1</a>
                    </li>
                    <li>
                      <a href="#">Level 2.2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
