import { LOGIN_SUCCESS, LOGOUT_SUCCESS, CLEAR_AUTH_MSG } from "../Types";
import url from "../../../Config/URL";

export const login = (code) => (dispatch) => {
  fetch(`https://discord.com/api/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: "1047482757523193867",
      client_secret: "g3M7LZUO9X8okPRnlkv6kNVZZ2bO7h_F",
      grant_type: "client_credentials",
      code: code,
      redirect_uri: "http://localhost:3000/auth/discord",
      scope: "guilds.members.read guilds email identify",
    }),
  }).then((resp) => {
    resp.json().then((response) => {
      console.log("ACCESS TOKEN", response.access_token);
      fetch(
        `https://discord.com/api/users/@me/guilds/1039545054127214612/member`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        }
      ).then((respo) => {
        if (respo.status === 404) {
          window.location.href = "http://localhost:3000/403";
        } else {
          respo.json().then((responseUser) => {
            if (responseUser.premium_since === null) {
              window.location.href = "http://localhost:3000/400";
            } else {
              const userObject = {
                discordId: responseUser.user.id,
                user: {
                  username: responseUser.user.username,
                  avatar: responseUser.user.avatar,
                },
              };
              fetch(`${url}/user/save`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userObject),
              });
              dispatch({
                type: LOGIN_SUCCESS,
                payload: userObject,
              });
            }
          });
        }
      });
    });
  });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const clearAuthMsg = () => async (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_MSG,
  });
};
