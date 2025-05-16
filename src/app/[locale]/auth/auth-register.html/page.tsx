import React from "react";

const RegisterPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <a href="index.html" className="mb-5 d-block auth-logo">
                <img
                  src="/assets/images/logo-dark.png"
                  alt=""
                  height={22}
                  className="logo logo-dark"
                />
                <img
                  src="/assets/images/logo-light.png"
                  alt=""
                  height={22}
                  className="logo logo-light"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card">
              <div className="card-body p-4">
                <div className="text-center mt-2">
                  <h5 className="text-primary">Register Account</h5>
                  <p className="text-muted">
                    Get your free Minible account now.
                  </p>
                </div>

                <div className="p-2 mt-4">
                  <form action="index.html">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="useremail">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="useremail"
                        placeholder="Enter email"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="username">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="userpassword">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="userpassword"
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="auth-terms-condition-check"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="auth-terms-condition-check"
                      >
                        I accept{" "}
                        <a href="#" className="text-dark">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>

                    <div className="mt-3 text-end">
                      <button
                        className="btn btn-primary w-sm waves-effect waves-light"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>

                    <div className="mt-4 text-center">
                      <div className="signin-other-title">
                        <h5 className="font-size-14 mb-3 title">
                          Sign up using
                        </h5>
                      </div>

                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="social-list-item bg-primary text-white border-primary"
                          >
                            <i className="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="social-list-item bg-info text-white border-info"
                          >
                            <i className="mdi mdi-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a
                            href="#"
                            className="social-list-item bg-danger text-white border-danger"
                          >
                            <i className="mdi mdi-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-muted mb-0">
                        Already have an account?{" "}
                        <a
                          href="auth-login.html"
                          className="fw-medium text-primary"
                        >
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p>
                © {currentYear} Minible. Crafted with{" "}
                <i className="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
