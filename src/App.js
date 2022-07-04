import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardCustomer from "./components/DashboardCustomer";
import AllUsers from "./pages/AdminPages/AllUsers";
import AddNewUser from "./pages/AdminPages/AddNewUser";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/dashboard/users" element={<AllUsers />} />
        <Route path="/admin/dashboard/addnewuser" element={<AddNewUser />} />
        <Route path="/customer/dashboard" element={<DashboardCustomer />} />
      </Routes>
    </div>
  );
}

export default App;