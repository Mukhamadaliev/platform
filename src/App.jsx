import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Mentors from "./pages/mentors/Mentors";
import Chat from "./pages/chat/Chat";
import TaklifVaMurojatlar from "./pages/taklifVaMurojatlar/TaklifVaMurojatlar";
import JoinUs from "./pages/joinUs/JoinUs";
import Texnologiya from "./pages/texnologiya/Texnologiya";
import Reklamalar from "./pages/reklamalar/Reklamalar";
import Frilace from "./pages/frilace/Frilace";
import NotFound from "./pages/notfound/NotFound";
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="app-layout">
      {location.pathname === "/texnologiya" && <Header />}

      <Sidebar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/reklamalar" element={<Reklamalar />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/taklifvamurojatlar" element={<TaklifVaMurojatlar />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/texnologiya" element={<Texnologiya />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frilace" element={<Frilace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
