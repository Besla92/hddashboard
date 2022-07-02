import React from 'react'

export const Layout = () => {
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
  
  <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
    <div className="container-fluid py-1 px-3">
      <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
          <div className="input-group">
            <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
            
          </div>
        </div>
        <ul className="navbar-nav  justify-content-end">
          <li className="nav-item d-flex align-items-center">
            
          </li>
          <li className="nav-item d-flex align-items-center">
           
              <i className="fa fa-user me-sm-1"></i>
              <span className="d-sm-inline d-none">Sign In</span>
            
          </li>
          <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
           
              <div className="sidenav-toggler-inner">
                <i className="sidenav-toggler-line"></i>
                <i className="sidenav-toggler-line"></i>
                <i className="sidenav-toggler-line"></i>
              </div>
            
          </li>
          <li className="nav-item px-3 d-flex align-items-center">
            
              <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
            
          </li>
          <li className="nav-item dropdown pe-2 d-flex align-items-center">
            
              <i className="fa fa-bell cursor-pointer"></i>
            
            <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
              <li className="mb-2">
                
                  <div className="d-flex py-1">
                    <div className="my-auto">
                      
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="text-sm font-weight-normal mb-1">
                        <span className="font-weight-bold">New message</span> from Laur
                      </h6>
                      <p className="text-xs text-secondary mb-0 ">
                        <i className="fa fa-clock me-1"></i>
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                
              </li>
              <li className="mb-2">
                
                  <div className="d-flex py-1">
                    <div className="my-auto">
                     
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="text-sm font-weight-normal mb-1">
                        <span className="font-weight-bold">New album</span> by Travis Scott
                      </h6>
                      <p className="text-xs text-secondary mb-0 ">
                        <i className="fa fa-clock me-1"></i>
                        1 day
                      </p>
                    </div>
                  </div>
                
              </li>
              <li>
               
                  <div className="d-flex py-1">
                    <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                     
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <h6 className="text-sm font-weight-normal mb-1">
                        Payment successfully completed
                      </h6>
                      <p className="text-xs text-secondary mb-0 ">
                        <i className="fa fa-clock me-1"></i>
                        2 days
                      </p>
                    </div>
                  </div>
                
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div className="container-fluid py-4">
    Test
  </div>
</main>
  )
}
