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
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/admin/alltickets/subject/asc`,  { headers: { token: token } })
      .then((response) => {
        console.log(response.data);
      setResults(response.data.rows);
      console.log(response);
      if (response.data === 0)  {
        console.log("no results");
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
           <div className="d-sm-flex align-items-center justify-content-between mb-4">
           </div>
         
     </div>
     </div>
</div>
</div>
      </div>
      ) : (
        <>
            Melde dich bitte an!
            <Navigate to="../" />;
        </>
      )}
    </>
  );
};

export default AllUsers;