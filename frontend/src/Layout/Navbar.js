import React from "react";
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import { connect } from "react-redux";
import { Logout, Login} from '@mui/icons-material';

import { logout } from "../Services/Redux/actions/authActions";

const Header = (props) => {
  const { isAuthenticated } = props.auth;

  return (
    <div>
      <AppBar position="static" style={{ background: "dodgerblue" }}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{ margin: "0 auto 0 0" }}>
            {isAuthenticated ? "You are logged in, Good!": "You need to login" }
          </Typography>
          {!isAuthenticated ? (
            <a
              href="/"
              // exact={true}
              // className="navbar"
              style={{color:'white'}}
              // activeStyle={{ color: "gold" }}
            >
              <IconButton color="inherit"><Login /></IconButton>
            </a>
          ) : (
            <IconButton color="inherit" onClick={() => props.logout()}>
              <Logout />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
