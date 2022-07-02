import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {

    const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);
    let userRole;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const loginData = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/login`,
        loginData
      );
      const token = res.headers.authorization;
      //token im localStorage speichern
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      console.log(res.data);
      userRole = res.data.role;
    } catch (error) {
      console.log(error);
    }
  };
  
  if (isAuthenticated) {
    if(userRole !== "admin")    {
        return <Navigate to="../admin/dashboard" />;
    }
    else    {
        return <Navigate to="../customer/dashboard" />;
    }
  }
    return (
        
          <section>
          <div className="page-header min-vh-75">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div className="card card-plain mt-8">
                    <div className="card-header pb-0 text-left bg-transparent">
                      <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                      <p className="mb-0">Enter your email and password to sign in</p>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <div className="mb-3">
                          <input type="email" id="email" name="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                        </div>
                        <label>Password</label>
                        <div className="mb-3">
                          <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                        </div>
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="rememberMe" checked="" />
                          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account?
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  };
  
  export default LoginPage;