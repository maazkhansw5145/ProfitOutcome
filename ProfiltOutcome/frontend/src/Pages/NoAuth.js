import React from "react";

function NoAuth(props) {
  return (
    <div
      style={{
        margin: 40,
        textAlign: "center",
        background: "#3a5dd5",
        padding: 40,
        color: "white",
        borderRadius: 25,
      }}
    >
      <h2>Sorry</h2>
      <h3>
        You cannot access this page because you are not a <b style={{color:'gold'}}>gold member</b> of our
        discord server.
      </h3>
      <p>To join our discord server click on the link:</p>
      <a href="https://discord.gg/eANu2qBp" style={{ color: "gold",display:'block',marginBottom:15 }}>
        JOIN SERVER
      </a>
      <button style={{borderRadius:20, color:"mediumblue", padding:"10px 20px",borderWidth:0}} onClick={() => props.history.push("/")}>
        Back to Login Page
      </button>
    </div>
  );
}

export default NoAuth;
