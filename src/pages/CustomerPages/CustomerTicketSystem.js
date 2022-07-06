import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './SideBar';
import { NavBar } from '../../components/NavBar';

const CustomerTicketSystem = () => {
  //const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [results, setResults] = useState(); 
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/user/postlogin/20`,  { headers: { token: token } })
      .then((response) => {
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
             <div className="col-sm-12">
                <div className="accordion-item" key={result.ticket_id}>
                    <h2 className="accordion-header" id={`heading${result.ticket_id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${result.ticket_id}`} aria-expanded="true" aria-controls={`collapse${result.ticket_id}`}>
                    <div className="row ticket-system-button">
                    
                      <div className="col-sm-8">{result.subject}</div>
                      <div className="col-sm-4"><span className={`${result.status}`}>{result.status}</span></div>

                      </div>
                    </button>
                    </h2>
                  <div id={`collapse${result.ticket_id}`} className="accordion-collapse collapse" aria-labelledby={`heading${result.ticket_id}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="row">
                        <div className='col-sm-8'>
                          <span>{result.content}</span>
                        </div>
                        <div className='col-sm-4'>
                          <p><span>Company: </span>{result.Company}</p>
                          <p><span>Name: </span>{result.first_name + " " + result.last_name}</p>
                          <p><span>Category: </span>{result.category}</p>
                          <p><span>Status: </span>{result.status}</p>
                          <p><span>Created: </span>{result.created_at}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  )
}

export default CustomerTicketSystem