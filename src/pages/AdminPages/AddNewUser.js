import React from 'react';
import { Sidebar } from './Sidebar';
import { NavBar } from '../../components/NavBar';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import axios from 'axios';
import { user } from 'pg/lib/defaults';

const AddNewUser = () => {

    const { isAuthenticated, setIsAuthenticated } =
    useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, first_name, last_name, username, company_name, user_role } = e.target;
        const loginData = {
          email: email.value,
          password: password.value,
          first_name: first_name.value,
          last_name: last_name.value,
          username: username.value,
          company_name: company_name.value,
          user_role: user_role.value,
        };
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/admin/adduser`,
            loginData
          );
          setIsAuthenticated(true);
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div id="wrapper">
         <Sidebar />
         <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
           <NavBar />
         <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Add new user</h1>
           </div>
           <div className="d-sm-flex align-items-center justify-content-between mb-4">
           </div>
         <div className="row">
         <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                                <div className="col-sm-6 inputForm">
                                    <label>Email</label>
                                    <input type="email" id="email" name="email" className="form-control" placeholder="Email" 
                                    aria-label="emial" aria-describedby="email-addon" autoComplete="on"/>
                                </div>
                                <div className="col-sm-6 inputForm">
                                    <label>Password</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Password" 
                                    aria-label="password" aria-describedby="password-addon" autoComplete="on"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 inputForm">
                                    <label>First Name</label>
                                    <input type="text" id="first_name" name="first_name" className="form-control" placeholder="First Name" 
                                    aria-label="firstName" aria-describedby="firstname-addon" autoComplete="on"/>
                                </div>
                                <div className="col-sm-6 inputForm">
                                    <label>Last Name</label>
                                    <input type="text" id="last_name" name="last_name" className="form-control" placeholder="Last Name" 
                                    aria-label="lastName" aria-describedby="lastname-addon" autoComplete="on"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 inputForm">
                                    <label>Username</label>
                                    <input type="text" id="username" name="username" className="form-control" placeholder="User Name" 
                                    aria-label="Username" aria-describedby="username-addon" autoComplete="on"/>
                                </div>
                                <div className="col-sm-6 inputForm">
                                    <label>Company Name</label>
                                    <select className="form-control" id="company_name">
                                        <option>Company 1</option>
                                        <option>Company 2</option>
                                        <option>Company 3</option>
                                        <option>Company 4</option>
                                        <option>Company 5</option>
                                        </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 inputForm">
                                    <label>User Role</label>
                                        <select className="form-control" id="user_role">
                                        <option>Admin</option>
                                        <option>User</option>
                                        </select>
                                </div>
                            </div>
                        <div className="text-left">
                            <button type="submit" className="btn btn-success">Create User</button>
                        </div>
                      </form>
                    </div>
         </div>
     </div>
     </div>
</div>
</div>
  )
}


export default AddNewUser;