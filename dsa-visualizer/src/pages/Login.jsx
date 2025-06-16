// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !name) return alert("Please fill all fields");

    const user = { email, name };
    localStorage.setItem("dsa-user", JSON.stringify(user));
    localStorage.setItem("dsa-logged-in", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl space-y-4 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-emerald-700">Login</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
