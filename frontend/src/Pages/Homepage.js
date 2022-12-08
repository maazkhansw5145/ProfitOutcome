import React, { useEffect, useState } from "react";
import Navbar from "../Layout/Navbar";
import { createClient } from "@supabase/supabase-js";
import { login, logout } from "../Services/Redux/actions/authActions";
import { clearErrors } from "../Services/Redux/actions/errorActions";
import { connect } from "react-redux";

const supabase = createClient(
  "https://izscxrhuaeahiecswtad.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6c2N4cmh1YWVhaGllY3N3dGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MjExMjUsImV4cCI6MTk4NTM5NzEyNX0.JvoWJKvE3pzHx5rU7IRhR4pTmKfSFkjDwZxaNfPxLZQ"
);

function Homepage(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (props.auth.msg === "Login Successfully") {
      setLoading(false);
    }
  }, [props.auth.msg]);

  async function getUser() {
    await supabase.auth.getUser().then((value) => {
      console.log("VALUE", value);
      if (value.data?.user) {
        props.login({
          full_name: value.data.user.user_metadata.full_name,
          email: value.data.user.user_metadata.email,
          role: value.data.user.role,
          picture: value.data.user.user_metadata.picture,
          email_verified: value.data.user.user_metadata.email_verified,
        });
      }
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    props.logout();
    props.history.push("/");
  }
  if (!props.auth.isAuthenticated) {
    return (
      <div>
        <Navbar
          signOut={signOut}
          isAuthenticated={props.auth.isAuthenticated}
        />
        <h2>Sorry You need to login first</h2>
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <Navbar
          signOut={signOut}
          isAuthenticated={props.auth.isAuthenticated}
        />
        <h1>Please wait, Checking Authorization....</h1>
      </div>
    );
  }
  return (
    <div>
      <Navbar signOut={signOut} isAuthenticated={props.auth.isAuthenticated} />
      {props.auth.user.role !== "gold" ? (
        <>
          <p
            style={{
              margin: 20,
              fontSize: 18,
              background: "aliceblue",
              padding: 70,
            }}
          >
            You are logged in but you don't have permission to access the
            homepage. You need to purchase{" "}
            <b style={{ color: "#cbad0e" }}>gold membership</b> in order to visit
            this page.
          </p>
          <p style={{textAlign:'center'}}>OR </p>
          <p style={{
              margin: 20,
              fontSize: 18,
              background: "aliceblue",
              padding: 70,
            }}>
            If you are a gold member, then go the server and click on the
            <b style={{color:'cornflowerblue'}}> verification link</b>.
          </p>
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: 50,
            color: "limegreen",
            background: "aliceblue",
            padding: 50,
          }}
        >
          <h2>Congratulations! You Have Successfully Accessed The Homepage</h2>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error.error,
});

export default connect(mapStateToProps, { login, logout, clearErrors })(
  Homepage
);
