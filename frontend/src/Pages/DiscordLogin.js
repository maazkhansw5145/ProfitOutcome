import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import "./DiscordLogin.css";
const supabase = createClient(
  "https://izscxrhuaeahiecswtad.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6c2N4cmh1YWVhaGllY3N3dGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MjExMjUsImV4cCI6MTk4NTM5NzEyNX0.JvoWJKvE3pzHx5rU7IRhR4pTmKfSFkjDwZxaNfPxLZQ"
);

function DiscordLogin(props) {
  supabase.auth.onAuthStateChange(async (event) => {
    console.log(event);
    if (event !== "SIGNED_OUT") {
      props.history.push("/auth/discord");
    } else {
      props.history.push("/");
    }
  });

  return (
    <div>
      <div
        className="title"
        style={{
          display: "flex",
          marginBottom: "45px",
          justifyContent: "center",
        }}
      >
        <h3>Profit Outcome</h3>
      </div>
      <div style={{ width: "50%", margin: "auto",marginTop:150 }}>
        <hr />
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["discord"]}
        />
      </div>
    </div>
  );
}

export default DiscordLogin;
