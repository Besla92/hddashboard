import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const DashboardCustomer = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
          <div>
          <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
    <div className="sidenav-header">
      <h4>Customer Dashboard</h4>
      <i><span className="fa fa-dropdown"></span></i>
    </div>
    <hr className="horizontal dark mt-0" />
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
         
        </li>
      </ul>
    </div>
    <div className="sidenav-footer mx-3 ">
      <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
        <div className="full-background" ></div>
      </div>
    </div>
  </aside>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
  
  <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
    <div className="container-fluid py-1 px-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
          <li className="breadcrumb-item text-sm"></li>
          <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
        </ol>
        <h6 className="font-weight-bolder mb-0">Dashboard</h6>
      </nav>
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
    <div className="row">
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                  <h5 className="font-weight-bolder mb-0">
                    $53,000
                    <span className="text-success text-sm font-weight-bolder">+55%</span>
                  </h5>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Users</p>
                  <h5 className="font-weight-bolder mb-0">
                    2,300
                    <span className="text-success text-sm font-weight-bolder">+3%</span>
                  </h5>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <div className="card">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">New Clients</p>
                  <h5 className="font-weight-bolder mb-0">
                    +3,462
                    <span className="text-danger text-sm font-weight-bolder">-2%</span>
                  </h5>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6">
        <div className="card">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">Sales</p>
                  <h5 className="font-weight-bolder mb-0">
                    $103,430
                    <span className="text-success text-sm font-weight-bolder">+5%</span>
                  </h5>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-lg-7 mb-lg-0 mb-4">
        <div className="card">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex flex-column h-100">
                  <p className="mb-1 pt-2 text-bold">Built by developers</p>
                  <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
                  <p className="mb-5">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                  
                    Read More
                    <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                  
                </div>
              </div>
              <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div className="bg-gradient-primary border-radius-lg h-100">
                  
                  <div className="position-relative d-flex align-items-center justify-content-center h-100">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="card h-100 p-3">
          <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100">
            <span className="mask bg-gradient-dark"></span>
            <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
              <h5 className="text-white font-weight-bolder mb-4 pt-2">Work with the rockets</h5>
              <p className="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-lg-5 mb-lg-0 mb-4">
        <div className="card z-index-2">
          <div className="card-body p-3">
            <div className="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
              <div className="chart">
                <canvas id="chart-bars" className="chart-canvas" height="170"></canvas>
              </div>
            </div>
            <h6 className="ms-2 mt-4 mb-0"> Active Users </h6>
            <p className="text-sm ms-2"> (<span className="font-weight-bolder">+23%</span>) than last week </p>
            <div className="container border-radius-lg">
              <div className="row">
                <div className="col-3 py-3 ps-0">
                  <div className="d-flex mb-2">
                    <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                      
                    </div>
                    <p className="text-xs mt-1 mb-0 font-weight-bold">Users</p>
                  </div>
                  <h4 className="font-weight-bolder">36K</h4>
                  <div className="progress w-75">
                    <div className="progress-bar bg-dark w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="col-3 py-3 ps-0">
                  <div className="d-flex mb-2">
                    <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center">
                      
                    </div>
                    <p className="text-xs mt-1 mb-0 font-weight-bold">Clicks</p>
                  </div>
                  <h4 className="font-weight-bolder">2m</h4>
                  <div className="progress w-75">
                    <div className="progress-bar bg-dark w-90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="col-3 py-3 ps-0">
                  <div className="d-flex mb-2">
                    <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center">
                     
                    </div>
                    <p className="text-xs mt-1 mb-0 font-weight-bold">Sales</p>
                  </div>
                  <h4 className="font-weight-bolder">435$</h4>
                  <div className="progress w-75">
                    <div className="progress-bar bg-dark w-30" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="col-3 py-3 ps-0">
                  <div className="d-flex mb-2">
                    <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center">
                      
                    </div>
                    <p className="text-xs mt-1 mb-0 font-weight-bold">Items</p>
                  </div>
                  <h4 className="font-weight-bolder">43</h4>
                  <div className="progress w-75">
                    <div className="progress-bar bg-dark w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="card z-index-2">
          <div className="card-header pb-0">
            <h6>Sales overview</h6>
            <p className="text-sm">
              <i className="fa fa-arrow-up text-success"></i>
              <span className="font-weight-bold">4% more</span> in 2021
            </p>
          </div>
          <div className="card-body p-3">
            <div className="chart">
              <canvas id="chart-line" className="chart-canvas" height="300"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
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

export default DashboardCustomer;