import React from "react";

const ResetPasswordPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div>
              <a href="#" className="mb-5 d-block auth-logo">
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

              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Reset Password</h5>
                    <p className="text-muted">Reset Password with Minible.</p>
                  </div>

                  <div className="p-2 mt-4">
                    <div
                      className="alert alert-success text-center mb-4"
                      role="alert"
                    >
                      Enter your Email and instructions will be sent to you!
                    </div>

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

                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Remember it?{" "}
                          <a
                            href="auth-login.html"
                            className="fw-medium text-primary"
                          >
                            {" "}
                            Sign in{" "}
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

export default ResetPasswordPage;
