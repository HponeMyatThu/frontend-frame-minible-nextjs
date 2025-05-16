import React from "react";

const AuthLockScreenPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div>
              <a href="index.html" className="mb-5 d-block auth-logo">
                <img
                  src="/assets/images/logo-dark.png"
                  alt=""
                  height="22"
                  className="logo logo-dark"
                />
                <img
                  src="/assets/images/logo-light.png"
                  alt=""
                  height="22"
                  className="logo logo-light"
                />
              </a>

              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Lock Screen</h5>
                    <p className="text-muted">
                      Enter your password to unlock the screen!
                    </p>
                  </div>

                  <div className="p-2 mt-4">
                    <div className="user-thumb text-center mb-4">
                      <img
                        src="/assets/images/users/avatar-4.jpg"
                        className="rounded-circle img-thumbnail avatar-lg"
                        alt="thumbnail"
                      />
                      <h5 className="font-size-15 mt-3">Marcus</h5>
                    </div>

                    <form action="index.html">
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

                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                        >
                          Unlock
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Not you? Return{" "}
                          <a
                            href="auth-login.html"
                            className="fw-medium text-primary"
                          >
                            Sign In
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
    </div>
  );
};

export default AuthLockScreenPage;
