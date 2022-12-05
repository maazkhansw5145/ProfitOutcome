import React, { useEffect } from "react";
import Navbar from "../Layout/Navbar";
import { createClient } from "@supabase/supabase-js";
// import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { login, logout } from "../Services/Redux/actions/authActions";
import { clearErrors } from "../Services/Redux/actions/errorActions";
import { connect } from "react-redux";

const supabase = createClient(
  "https://izscxrhuaeahiecswtad.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6c2N4cmh1YWVhaGllY3N3dGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MjExMjUsImV4cCI6MTk4NTM5NzEyNX0.JvoWJKvE3pzHx5rU7IRhR4pTmKfSFkjDwZxaNfPxLZQ"
);

function Homepage(props) {
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    await supabase.auth.getUser().then((value) => {
      console.log("VALUE", value);
      if (value.data?.user) {
        props.login({
          user: value.data.user.user_metadata,
          role: value.data.user.role,
        });
      }
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    props.logout();
    props.history.push("/");
  }

  return (
    <div>
      <Navbar signOut={signOut} isAuthenticated={props.auth.isAuthenticated} />
      {props.auth.isAuthenticated && props.auth?.role === "gold" ? (
        <>
          <h3 style={{ margin: 20, fontSize: 18 }}>Welcome to Homepage</h3>
        </>
      ) : props.auth.isAuthenticated && props.auth?.role !== "gold" ? (
        <h3 style={{ margin: 20, fontSize: 18 }}>
          Your logged in but you are not authorized to access this page.
        </h3>
      ) : (
        <>
          <h3 style={{ margin: 20 }}>You need to login to access this page.</h3>
          <p style={{ margin: 20, fontSize: 18, fontStyle: "italic" }}>
            Click on the top right icon to navigate to login screen
          </p>
        </>
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
