import React from 'react';
import { Sidebar } from './Sidebar';
import { NavBar } from '../../components/NavBar';

const Settings = () => {
  return (
    <div>
        <div id="wrapper">
         <Sidebar />
         <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
           <NavBar />
         <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
             <h1 className="h3 mb-0 text-gray-800">Settings</h1>
           </div>
           <div className="d-sm-flex align-items-center justify-content-between mb-4">
           </div>
         
     </div>
     </div>
</div>
</div>
      </div>
  )
}

export default Settings