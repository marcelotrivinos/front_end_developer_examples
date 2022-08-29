import { useState } from "react";

/*
 * sessionStorage: does not save data after session ends.
 * localStorage: save the data after the session ends.
 */

export function useToken() {
  const LOCAL_TOKEN_KEY = "token";

  const getToken = () => {
    const userToken = localStorage.getItem(LOCAL_TOKEN_KEY);
    //console.log("Get token");
    if (userToken !== "undefined") {
      return userToken;
    } else {
      return {};
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem(LOCAL_TOKEN_KEY, userToken);
    setToken(userToken);
    //console.log("Save token");
  };

  const deleteToken = (userToken) => {
    localStorage.removeItem(userToken);
    setToken({});
    //console.log("Delete token");
  };

  return {
    token,
    setToken: { 0: saveToken, 1: deleteToken }
  };
}
