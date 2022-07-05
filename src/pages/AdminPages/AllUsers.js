import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { NavBar } from "../../components/NavBar";
import { useContext, useState, useEffect } from "react";
import axios from "axios";


const AllUsers = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [results, setResults] = useState(); 
  const token = localStorage.getItem("token");
  console.log(isAuthenticated)
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/users/u.id/desc`,  { headers: { token: token } })
      .then((response) => {
      setResults(response.data.rows);
      if (response.data === 0)  {
        
      }      
      })
      .catch((error) => console.log({error: error.message}));
    },[]);
  

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
                  <td><button type="submit" className="btn btn-success">Edit</button><button type="submit" className="btn btn-danger">Delete</button></td>
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
            Melde dich bitte an!
            <Navigate to="/" />;
        </>
      )}
    </>
  );
};

export default AllUsers;