import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
          <div>
  <div className="container-fluid py-4">
    <div className="row">
      Dashboard Statisktik
  </div>
</div>
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

export default Dashboard;