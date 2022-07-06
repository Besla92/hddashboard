import React from 'react';
import { Sidebar } from './Sidebar';
import { NavBar } from '../../components/NavBar';
//import { AuthContext } from '../../context/AuthContext';
//import { useContext } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

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

    //HandleSubmit für den Status Update
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { status, current_ticket_id } = e.target;
      
       const new_ticket_status_id = status.value;
       const ticket_id = current_ticket_id.value;
       console.log(new_ticket_status_id, ticket_id);
       if(new_ticket_status_id && ticket_id) {
       try {
         await axios.put(
          `${process.env.REACT_APP_API_URL}/api/admin/tickets/${ticket_id}`,
          {"new_ticket_status_id": new_ticket_status_id}, { headers: { token: token } }
        );
        
        return <Navigate to="./admin/dashboard/ticketsystem" />
      } catch (error) {
        console.log(error);
      }
    };
  }
//HandleSubmit für den Status Update

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
             <div className="col-sm-10">
                <div className="accordion-item" key={result.ticket_id}>
                    <h2 className="accordion-header" id={`heading${result.ticket_id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${result.ticket_id}`} aria-expanded="true" aria-controls={`collapse${result.ticket_id}`}>
                    <div className="row ticket-system-button">
                    
                      <div className="col-sm-8">{"#"+result.ticket_id + " " + result.subject}</div>
                      <div className="col-sm-4"><span className={`${result.status}`}>{result.status}</span></div>

                      </div>
                    </button>
                    </h2>
                  <div id={`collapse${result.ticket_id}`} className="accordion-collapse collapse" aria-labelledby={`heading${result.id}`} data-bs-parent="#accordionExample">
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
                <div className="col-sm-2">
                {"<--! Hier fängt der Modal an"}
                <button type="button" className="btn btn-success btn-sm" data-toggle="modal" data-target={`#myModal${result.ticket_id}`}>Edit</button>
                  <div className="modal" id={`myModal${result.ticket_id}`}>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Update ticket #{result.ticket_id}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                          </div>
                          <form onSubmit={handleSubmit}>

                                <div className="col-sm-6 inputForm">
                                <label>Ticket ID</label>
                                <input type="text" id="current_ticket_id" className="form-control" value={result.ticket_id} readOnly/>
                                    <label>Ticket Status</label>
                                        <select className="form-control" id="status">
                                        <option value="0">Wählen</option>
                                        <option value="1">Open</option>
                                        <option value="2">Pending</option>
                                        <option value="3">Closed</option>
                                        </select>
                                </div>
                            
                              <div className="modal-footer">
                                  <button type="submit" className="btn btn-success">Update</button>
                                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {"<--! Hier hört der Modal auf"}
                <button type="submit" className="btn btn-danger btn-sm">Delete</button>
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