import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import { Applications } from "./pages/Applications";
import Followers from "./pages/Followers";
import MyInventory from "./pages/MyInventory";
import CompanyProfile from "./pages/CompanyProfile";
import AllUsers from "./pages/AllUsers";
import { MyAccount } from "./pages/MyAccount";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import Footer from "./components/Footer.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <BrowserRouter>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />

      <Sidebar isOpen={isOpen}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/Followers" element={<Followers />} />
          <Route path="/MyInventory" element={<MyInventory />} />
          <Route path="/CompanyProfile" element={<CompanyProfile />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/MyAccount" element={<MyAccount />} />
        </Routes>
      </Sidebar>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
