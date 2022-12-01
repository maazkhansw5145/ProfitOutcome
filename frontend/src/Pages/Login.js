import React, { useState, useEffect } from "react";
import { Grid, Button, InputAdornment, IconButton, Alert } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "./login.css";
import { login } from "../Services/Redux/actions/authActions";
import { clearErrors } from "../Services/Redux/actions/errorActions";
import { connect } from "react-redux";
import {
  Visibility,
  VisibilityOff,
  Face,
  Fingerprint,
} from "@mui/icons-material";
import Loading from "../Components/Loading";
import Discordlogin from "./Discordlogin";

const LoginForm = (props) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(props.auth.msg);
    if (props.auth.msg === "Login Successfully") {
      props.history.push(`/home`);
      console.log("push to home");
    }
  }, [props.auth.msg]);

  useEffect(() => {
    if (props.error) {
      setLoading(false);
    }
  }, [props.error]);

  const handleSubmit = () => {
    props.clearErrors();
    const data = {
      loginId: `${loginId}@discord.com`,
      password,
    };
    props.login(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          marginBottom: "45px",
          justifyContent: "center",
        }}
        className="title"
      >
        <h3>Profit Outcome</h3>
      </div>
      <h2 style={{ marginBottom: 50 }}>Login</h2>
      <div>
        {/* <a
          href="https://discord.com/api/oauth2/authorize?client_id=1047482757523193867&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&response_type=code&scope=identify"
          style={{
            backgroundColor: "#7289DA",
            borderRadius: 10,
            display: "flex",
            color: "white",
            borderWidth: 0,
            padding: "10px 25px",
            textDecoration: "none",
            width: 175,
            margin: "20px auto",
            alignItems:'center'
            
          }}
        >
         <img src={require('../Assets/download.png')} style={{width:30,height:30,marginRight:5}} alt="discord logo" /> 
          Login with discord
        </a> */}

        <Discordlogin {...props} />

        <h3 style={{ textAlign: "center" }}>Or</h3>
        <ValidatorForm onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px " }}>
            <div style={{ display: "inline-flex", marginBottom: "10px" }}>
              <div style={{ margin: "8px 40px 0 0" }}>
                <Face fontSize="large" />
              </div>
              <div className="responsive-input-loginID">
                <TextValidator
                  fullWidth={true}
                  label="Login Id"
                  onChange={(e) => setLoginId(e.target.value)}
                  name="logindD"
                  value={loginId}
                  style={{ textTransform: "lowercase" }}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <p>@discord.com</p>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "inline-flex", marginBottom: "10px" }}>
              <div style={{ margin: "8px 40px 0 0" }}>
                <Fingerprint fontSize="large" />
              </div>
              <div>
                <TextValidator
                  fullWidth={true}
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          {props.error && (
            <div className="responsive-alert">
              <Alert severity="error">{props.error}</Alert>
            </div>
          )}

          <Grid
            container
            style={{ marginTop: "30px", justifyContent: "center" }}
          >
            {!loading ? (
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  setLoading(true);
                  handleSubmit();
                }}
                disabled={loginId.length < 4 || password.length < 4 || loading}
              >
                Login
              </Button>
            ) : (
              <Loading />
            )}
          </Grid>
        </ValidatorForm>
        {error}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error.error,
});

export default connect(mapStateToProps, { login, clearErrors })(LoginForm);
