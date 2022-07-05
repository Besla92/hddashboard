import React from 'react'
import { Link } from 'react-router-dom';
//import { ArrowDown } from 'react-bootstrap-icons';

export const Sidebar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    
    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="./">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin</div>
    </Link>
    <i className="fa-brands fa-bootstrap"></i>
    
    <hr className="sidebar-divider my-0" />
   
    <li className="nav-item active">
        <Link className="nav-link" to="../">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
    </li> 
    <hr className="sidebar-divider" />
    <li className="nav-item has-submenu">
        <Link className="nav-link" to="#"  data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <h6>Users</h6>
        </Link>
    </li>    
    <li className="nav-item has-submenu">
    <Link className="nav-link" to="/admin/dashboard/users">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>All users</span></Link>
    </li>
    <li className="nav-item has-submenu">
    <Link className="nav-link" to="/admin/dashboard/addnewuser">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Add new user</span></Link>
    </li>
       
    
    <hr className="sidebar-divider" />
    <li className="nav-item active">
        <Link className="nav-link" to="/admin/dashboard/ticketsystem">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Ticket system</span></Link>
    </li> 
    <li className="nav-item active">
        <Link className="nav-link" to="/admin/dashboard/invoices">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Invoices</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/admin/dashboard/chat">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Chat</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/admin/dashboard/account">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Account</span></Link>
    </li>
    <li className="nav-item active">
        <Link className="nav-link" to="/admin/dashboard/settings">
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
