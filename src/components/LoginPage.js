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
      console.log(userRole);
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
        <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-lg-6 col-xl-4 offset-xl-1">
            <h2>Hansa Design Ticket System</h2>
              <form onSubmit={handleSubmit}>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0"></p>
                </div>
      
                {/* Email Input */}
                <div className="form-outline mb-4">
                  <input type="email" id="email" name="email" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" autoComplete="on" />
                  <label className="form-label">Email address</label>
                </div>
      
                {/* Password Input */}
                <div className="form-outline mb-3">
                  <input type="password" id="inputPassword" name="password" className="form-control form-control-lg"
                    placeholder="Enter password" autoComplete="on" />
                  <label className="form-label">Password</label>
                </div>
      
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
      
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg">Login</button>
                </div>
      
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default LoginPage;