import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="./">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Customer</div>
    </Link>
    <i className="fa-brands fa-bootstrap"></i>
    
    <hr className="sidebar-divider my-0" />
   
    <li className="nav-item active">
        <Link className="nav-link" to="../">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
    </li> 
    <li className="nav-item active">
        <Link className="nav-link" to="/customer/dashboard/products">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Products</span></Link>
    </li> 
    <li className="nav-item has-submenu">
        <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <span>Ticket system</span>
        </Link>
        
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/customer/dashboard/addnewticket">Open ticket</Link>
                <Link className="collapse-item" to="/customer/dashboard/tickets">Ticket list</Link>
            </div>
        </div>
    </li>
    <hr className="sidebar-divider" />
    
    <li className="nav-item active">
        <Link className="nav-link" to="/customer/dashboard/invoices">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Invoices</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/customer/dashboard/chat">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Chat</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/customer/dashboard/account">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Account</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/customer/dashboard/settings">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Settings</span></Link>
    </li>
  
    <hr className="sidebar-divider d-none d-md-block" />

    
    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
</ul>
  )
}

export default Sidebar