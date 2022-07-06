import React from 'react';
import { Sidebar } from './Sidebar';
import { NavBar } from '../../components/NavBar';
//import { AuthContext } from '../../context/AuthContext';
//import { useContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const TicketSystem = () => {
  //const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
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
    },[token]);
    
  return (
    <div id="wrapper">
         <Sidebar />
         <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
           <NavBar />
         <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Ticket system</h1>
           </div>
           
           <div className="accordion" id="accordionExample">
           { results ?  ( 
                results.map((result) => (
                  <div className="row ticketsystem-row" key={result.ticket_id}>
             <div className="col-sm-11">
                <div className="accordion-item" key={result.ticket_id}>
                    <h2 className="accordion-header" id={`heading${result.ticket_id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${result.ticket_id}`} aria-expanded="true" aria-controls={`collapse${result.ticket_id}`}>
                    <div className="row ticket-system-button">
                    
                      <div className="col-sm-8">{result.subject}</div>
                      <div className="col-sm-4"><span className={`${result.status}`}>{result.status}</span></div>

                      </div>
                    </button>
                    </h2>
                  <div id={`collapse${result.ticket_id}`} className="accordion-collapse collapse" aria-labelledby={`heading${result.id}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-1">
                  <span>Edit</span>
                  <span>Info</span>
                  <span>Del</span>
                </div>
                </div>
                )) 
               ) :  (
                  <div>Leer</div>
                )}
                </div>
                
     </div>
     </div>
</div>
</div>
  )}


export default TicketSystem;