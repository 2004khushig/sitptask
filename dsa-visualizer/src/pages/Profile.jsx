// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("dsa-logged-in");
    const storedUser = JSON.parse(localStorage.getItem("dsa-user"));
    const storedProgress = JSON.parse(localStorage.getItem("dsa-progress")) || {};

    if (!isLoggedIn || !storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
      setProgress(storedProgress);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("dsa-logged-in");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-emerald-700 text-center">
          👤 Profile
        </h2>

        {user && (
          <div className="text-lg space-y-2">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold text-emerald-600 mt-6">
            📊 Progress
          </h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <span className="font-medium">Sorting:</span>{" "}
              {progress.sorting ? "Completed ✅" : "Not Started ❌"}
            </li>
            <li>
              <span className="font-medium">Searching:</span>{" "}
              {progress.searching ? "Completed ✅" : "Not Started ❌"}
            </li>
            <li>
              <span className="font-medium">Trees:</span>{" "}
              {progress.tree ? "Completed ✅" : "Not Started ❌"}
            </li>
            <li>
              <span className="font-medium">Graphs:</span>{" "}
              {progress.graph ? "Completed ✅" : "Not Started ❌"}
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
