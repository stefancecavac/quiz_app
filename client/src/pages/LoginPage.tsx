import { useState } from "react";
import { UseAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = UseAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ password, username });
  };
  return (
    <div className="flex flex-col gap-5">
      <form>
        <input onChange={(e) => setUsername(e.target.value)} className="bg-red-500" />
        <input onChange={(e) => setPassword(e.target.value)} className="bg-blue-500" />

        <button onClick={(e) => handleLogin(e)}>login</button>
      </form>
    </div>
  );
};
