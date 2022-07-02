import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardCustomer from "./components/DashboardCustomer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PostLogin from "./components/PostLogin";


function App() {
  return (
    <div className="container-fluid App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/customer/dashboard" element={<DashboardCustomer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-login" element={<PostLogin />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;