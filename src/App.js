import "./App.css";
import React, { useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { LoginContext } from "./Context/LoginContext";

export default function App() {
  const [showProfile, setShowProfile] = useState("");
  const [username, setUserName] = useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUserName, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}
