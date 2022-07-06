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
import CustomerAccount from "./pages/CustomerPages/CustomerAccount";
import CustomerSettings from "./pages/CustomerPages/CustomerSettings";
import CustomerChat from "./pages/CustomerPages/CustomerChat";
import CustomerCreateNewTicket from "./pages/CustomerPages/CustomerCreateNewTicket";
import CustomerTicketSystem from "./pages/CustomerPages/CustomerTicketSystem";
import CustomerInvoices from "./pages/CustomerPages/CustomerInvoices";
import CustomerProducts from "./pages/CustomerPages/CustomerProducts";


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
        <Route path="/customer/dashboard/account" element={<CustomerAccount />} />
        <Route path="/customer/dashboard/settings" element={<CustomerSettings />} />
        <Route path="/customer/dashboard/invoices" element={<CustomerInvoices />} />
        <Route path="/customer/dashboard/chat" element={<CustomerChat />} />
        <Route path="/customer/dashboard/products" element={<CustomerProducts />} />
        <Route path="/customer/dashboard/create-ticket" element={<CustomerCreateNewTicket />} />
        <Route path="/customer/dashboard/ticket-list" element={<CustomerTicketSystem />} />
      </Routes>
    </div>
  );
}

export default App;