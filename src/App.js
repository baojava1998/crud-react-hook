import './App.css';
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import { Outlet } from "react-router-dom";
import React from "react";
function App() {
  return (
      <div id={'wrapper'}>
        <Header/>
        <Sidebar/>
          <div className="content-page">
              <div className="content">
                  <div className="container-fluid">
                      <Outlet />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
