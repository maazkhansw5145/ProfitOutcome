import React from "react";
// import { createClient } from "@supabase/supabase-js";
// import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
// import "./DiscordLogin.css";
// const supabase = createClient(
//   "https://izscxrhuaeahiecswtad.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6c2N4cmh1YWVhaGllY3N3dGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MjExMjUsImV4cCI6MTk4NTM5NzEyNX0.JvoWJKvE3pzHx5rU7IRhR4pTmKfSFkjDwZxaNfPxLZQ"
// );

function DiscordLogin(props) {
  //   supabase.auth.onAuthStateChange(async (event) => {
  //     console.log(event);
  //     if (event !== "SIGNED_OUT") {
  //       props.history.push("/auth/discord");
  //     } else {
  //       props.history.push("/");
  //     }
  //   });

  return (
    <div>
      <div
        className="title"
        style={{
          display: "flex",
          marginBottom: "45px",
          justifyContent: "center",
          background: "rgb(67 103 233)",
          color: "white",
        }}
      >
        <h3>Profit Outcome</h3>
      </div>
      <div style={{ width: "50%", margin: "auto" }}>
        {/* <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["discord"]}
        /> */}
        <a
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgb(67 103 233)",
            color: "white",
            textDecoration: "none",
            padding: "10px 40px",
            borderRadius: 15,
            borderWidth: 0,
          }}
          href="https://discord.com/api/oauth2/authorize?client_id=1047482757523193867&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&response_type=code&scope=guilds.members.read%20guilds%20email%20identify"
        >
          <img
            src={require("../Assets/download.png")}
            style={{ width: 50, height: 50, marginRight: 15 }}
          />
          Login with discord
        </a>
      </div>
    </div>
  );
}

export default DiscordLogin;
