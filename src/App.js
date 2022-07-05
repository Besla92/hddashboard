import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardCustomer from "./components/DashboardCustomer";
import AllUsers from "./pages/AdminPages/AllUsers";
import AddNewUser from "./pages/AdminPages/AddNewUser";
import TicketSystem from "./pages/AdminPages/TicketSystem";
import Chat from "./pages/AdminPages/Chat";
import Account from "./pages/AdminPages/Account";
import Settings from "./pages/AdminPages/Settings";
import Invoices from "./pages/AdminPages/Invoices";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/dashboard/users" element={<AllUsers />} />
        <Route path="/admin/dashboard/addnewuser" element={<AddNewUser />} />
        <Route path="/admin/dashboard/ticketsystem" element={<TicketSystem />} />
        <Route path="/admin/dashboard/invoices" element={<Invoices />} />
        <Route path="/admin/dashboard/chat" element={<Chat />} />
        <Route path="/admin/dashboard/account" element={<Account />} />
        <Route path="/admin/dashboard/settings" element={<Settings />} />
        <Route path="/customer/dashboard" element={<DashboardCustomer />} />
      </Routes>
    </div>
  );
}

export default App;