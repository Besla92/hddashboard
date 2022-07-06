import React from 'react';
import Sidebar from './SideBar';
import { NavBar } from '../../components/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const CustomerCreateNewTicket = () => {

    const { setIsAuthenticated } = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user_id");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { category, subject, content} = e.target;
        const loginData = {
          category: category.value,
          subject: subject.value,
          content: content.value,
        };
        console.log(loginData);
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/user/postlogin/${user}`,
            loginData, { headers: { token: token } }
          );
          setIsAuthenticated(true);
          console.log(res);
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
             <h1 className="h3 mb-0 text-gray-800">Create new Ticket</h1>
           </div>
           <div className="d-sm-flex align-items-center justify-content-between mb-4">
           </div>
         <div className="row">
         <div className="card-body">
                      <form onSubmit={handleSubmit}>
                      <div className="row">
                                <div className="col-sm-6 inputForm">
                                    <label>User Role</label>
                                        <select className="form-control" id="category">
                                        <option value="Support">Support</option>
                                        <option value="Maintenance">Maintenance</option>
                                        <option value="Hosting">Hosting</option>
                                        <option value="Website">Website</option>
                                        <option value="Login">Login</option>
                                        </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 inputForm">
                                    <label>Subject</label>
                                    <input type="subject" id="subject" name="subject" className="form-control" placeholder="Subject" 
                                    aria-label="subject" aria-describedby="subject-addon" autoComplete="on"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 inputForm">
                                    <label htmlFor="content">Description</label>
                                    <textarea className="form-control" id="content" rows="6" placeholder="Description"></textarea>
                                </div>
                            </div>
                            
                            
                            
                        <div className="text-left">
                            <button type="submit" className="btn btn-success">Create ticket</button>
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

export default CustomerCreateNewTicket