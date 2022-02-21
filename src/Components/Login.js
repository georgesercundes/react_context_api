import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

export default function Login() {
  const { setShowProfile, setUserName } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <input type="text" placeholder="Password..."></input>
      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        LOGIN
      </button>
    </>
  );
}
