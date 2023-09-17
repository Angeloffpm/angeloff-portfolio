import React from "react";
import logo from './logo.svg';
import './App.css';
import './projectpage.css';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import WebsiteNavbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <WebsiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    </BrowserRouter>
  );

}

export default App;
