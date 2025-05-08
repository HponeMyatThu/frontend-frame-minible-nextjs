import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Login() {
  return (
    <>
      <div className="">
        <div className="account-pages my-5 pt-sm-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <Link href="/" className="mb-5 d-block auth-logo">
                    <Image
                      src="/assets/images/logo-dark.png"
                      alt="Logo Dark"
                      height={22}
                      width={120}
                      className="logo logo-dark"
                    />
                    <Image
                      src="/assets/images/logo-light.png"
                      alt="Logo Light"
                      height={22}
                      width={120}
                      className="logo logo-light"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row align-items-center justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">
                        Sign in to continue to Minible.
                      </p>
                    </div>

                    <div className="p-2 mt-4">
                      <form action="/">
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
                          <div className="float-end">
                            <Link href="/auth-recoverpw" className="text-muted">
                              Forgot password?
                            </Link>
                          </div>
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
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <p>
                    © {new Date().getFullYear()} Minible. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
