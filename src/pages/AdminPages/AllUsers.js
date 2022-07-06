import { AuthContext } from "../../context/AuthContext";
import { Sidebar } from "./Sidebar";
import { NavBar } from "../../components/NavBar";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


const AllUsers = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [results, setResults] = useState(); 
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/users/u.id/desc`,  { headers: { token: token } })
      .then((response) => {
      setResults(response.data.rows);
      if (response.data === 0)  {
        
      }      
      })
      .catch((error) => console.log({error: error.message}));
    },[token]);
    console.log(results);

    const ChangePassword = async (e) => {
      //e.preventDefault();
      const { user_id_for_pw, password } = e.target;
      const user_id =  user_id_for_pw.value;
       const data = {
        password: password.value
      };
      try {
        await axios.put(
        `${process.env.REACT_APP_API_URL}/api/admin/user/update-password/${user_id}`,
        data, { headers: { token: token } }
      );
    } catch (error) {
      console.log(error);
    }
    return <Navigate to="./" />
  }

  const handleSubmit = async (e) => {
    //e.preventDefault();
    const { user_id_user, first_name, last_name, username, email, company_id, role_id, status_id } = e.target;
    const user_id = user_id_user.value;
    const data = {
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      email: email.value,
      company_id: company_id.value,
      role_id: role_id.value,
      status_id: status_id.value
    };
    console.log(data);
    try {
      await axios.put(
      `${process.env.REACT_APP_API_URL}/api/admin/user/${user_id}`,
      data, { headers: { token: token } }
    );
  } catch (error) {
    console.log(error);
  }
  return <Navigate to="./" />
}
  

  return (
    <>
      {isAuthenticated ? (
      <div>
        <div id="wrapper">
         <Sidebar />
         <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
           <NavBar />
         <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Users</h1>
           </div>
           <div className="row">
             <div className="col-sm-12">
             <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">username</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">company</th>
      <th scope="col">role</th>
    </tr>
  </thead>
  <tbody>
  { results ?  ( 
                results.map((result) => (
                  <tr key={result.user_id}>
                  <td>{result.username}</td>
                  <td>{result.first_name + " " + result.last_name}</td>
                  <td>{result.email}</td>
                  <td>{result.company}</td>
                  <td>{result.role}</td>
                  <td>
                  {/* Hier fängt der Modal an */}
                <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target={`#myModal${result.user_id}`}>Edit</button>
                  <div className="modal" id={`myModal${result.user_id}`}>
                      <div className="modal-dialog ">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Edit user #{result.user_id}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                          </div>
                          
                                <div className="col-sm-12 inputForm">
                                <form onSubmit={handleSubmit}>
                                <div className="row">
                                <div className="col-sm-6">
                                <label>User ID</label>
                                <input type="text" id="user_id_user" className="form-control" value={result.user_id} readOnly />
                                </div>
                                <div className="col-sm-6">
                                <label>Username</label>
                                <input type="text" id="username" className="form-control" value={result.username} readOnly />
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-12">
                                <label>Email</label>
                               
                                <input class="form-control" id="email" name="email" type="text"  value={result.email} />
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-6">
                                <label>First name</label>
                                <input type="text" id="first_name" className="form-control" value={result.first_name} />
                                </div>
                                <div className="col-sm-6">
                                <label>Last name</label>
                                <input type="text" id="last_name" className="form-control" value={result.last_name} />
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-6">
                                <label>Company</label>
                                        <select className="form-control" id="company_id">
                                        <option value="3">WBS GmbH</option>
                                        <option value="16">test GmbH</option>
                                        <option value="18">Coca Cola</option>
                                        <option value="63">Metallica GmbH</option>
                                        </select>
                                </div>
                                <div className="col-sm-6">
                                <label>User status</label>
                                <select className="form-control" id="status_id">
                                        <option value="1">Active</option>
                                        <option value="2">Not Active</option>
                                        </select>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-6">
                                <label>User Role</label>
                                        <select className="form-control" id="role_id">
                                        <option value="1">Admin</option>
                                        <option value="2">User</option>
                                        </select>
                                </div>
                            
                                </div>
                                <div className="row">
                                  <div className="col-sm-6">
                                  
                                  </div>
                                  <div className="col-sm-3">
                                  <button type="submit" className="btn btn-success">Update</button>
                                  
                                  </div>
                                  <div className="col-sm-3">
                                  
                                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                  </div>
                                </div>
                                </form>
                                <br />
                                <hr className="sidebar-divider my-0" /> 
                                <br /> 
                                <form onSubmit={ChangePassword}>  
                                <div className="row">
                                <div className="col-sm-12">
                                <input type="text" id="user_id_for_pw" className="form-control" value={result.user_id} readOnly />
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-sm-6">
                                <input className="form-control" type="password" id="password"/>
                                </div>
                                <div className="col-sm-6">
                                
                                <button type="submit" className="btn btn-success">Change Password</button>
                                </div>
                                </div>
                                </form>
                                </div>
                  
                        </div>
                      </div>
                    </div>
                    {/* Hier hört der Modal auf */}
                  <button type="submit" className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                )) 
               ) :  (
                  <></>
                )}
  </tbody>
</table>
             </div>
           </div>
         
     </div>
     </div>
</div>
</div>
      </div>
      ) : (
        <>
            
        </>
      )}
    </>
  );
};

export default AllUsers;