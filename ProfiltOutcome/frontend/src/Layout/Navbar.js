import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Logout, Login} from '@mui/icons-material';

const Header = (props) => {
  const { isAuthenticated } = props;

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
            <IconButton color="inherit" onClick={() => props.signOut()}>
              <Logout />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
