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
    <hr className="sidebar-divider" />
    <li className="nav-item has-submenu">
        <Link className="nav-link" to="#"  data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <h6>Ticket system</h6>
        </Link>
    </li>    
    <li className="nav-item has-submenu">
    <Link className="nav-link" to="/customer/dashboard/create-ticket">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Create Ticket</span></Link>
    </li>
    <li className="nav-item has-submenu">
    <Link className="nav-link" to="/customer/dashboard/ticket-list">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Ticket list</span></Link>
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