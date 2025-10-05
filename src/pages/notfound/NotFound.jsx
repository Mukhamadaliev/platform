import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ fontSize: "64px", color: "#ff4d4f" }}>404</h1>
      <p style={{ fontSize: "20px" }}>Sahifa topilmadi 🚫</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          background: "#007bff",
          color: "white",
          cursor: "pointer"
        }}
      >
        Orqaga
      </button>
    </div>
  );
};

export default NotFound;
