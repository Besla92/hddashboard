import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import '../Dashboard.css';
import '../soft-ui-dashboard.min.css';
import '../Dashboard.min.css';
import { Sidebar } from "../pages/AdminPages/Sidebar";

const DashboardAdmin = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Sidebar />
        
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

export default DashboardAdmin;