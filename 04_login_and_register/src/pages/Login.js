import React, { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080/"
});

const header = { "Content-Type": "application/json" };

export function Login({ setToken }) {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidDate, setIsValidDate] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  /*
   * The password must have at least one uppercase,
   * one lowercase, one number, one symbol and have
   * a length of 12.
   */
  const passwordPattern = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})/
  );

  const validPassword = (text) => {
    return passwordPattern.test(text);
  };

  /* https://stackoverflow.com/questions/15491894/regex-to-validate-date-formats-dd-mm-yyyy-dd-mm-yyyy-dd-mm-yyyy-dd-mmm-yyyy */
  /* Checks if leap year. Years from 1900 to 9999 are valid. Only dd/MM/yyyy */

  /* https://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns */
  const datePattern = new RegExp(
    /(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])\d\d$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/
  );

  const validDate = (date) => {
    return datePattern.test(date);
  };

  useEffect(() => {
    setIsNewAccount(false);
    setIsValidPassword(true);
    setIsValidDate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isValidPassword && !isNewAccount) {
      loginUser({
        username,
        password
      })
    }
    if (isValidPassword && isValidDate && isNewAccount) {
      signUpUser({
        name,
        dateOfBirth,
        username,
        password
      })
    }
  };

  function loginUser(credentials) {
    client
      .post("/login", credentials, header)
      .then((response) => {
        let data = response.data;

        if (!data.error) {
          setIsMessage(false);
          setResponseMessage("");
          setToken(data.token);
        } else {
          setIsMessage(true);
          setResponseMessage(data.message);		  
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signUpUser(credentials) {
    client
      .post("/register", credentials, header)
      .then((response) => {
        let data = response.data;
        if (!data.error) {
          setIsMessage(false);
          setResponseMessage("");
          setToken(data.token);
        } else {
          setIsMessage(true);
          setResponseMessage(data.message);		  
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleDateOfBirth = (dateOfBirth) => {
    setDateOfBirth(dateOfBirth);
    if (!validDate(dateOfBirth)) {
      setIsValidDate(false);
    } else {
      setIsValidDate(true);
    }
  }

  const handlePassword = (password) => {
    setPassword(password);
    if (!validPassword(password)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
  }

  const nameComponent = (
    <label>
      <p>Name</p>
      <input
        type="text"
        className="input-text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );

  const dateOfBirthComponent = (
    <label>
      <p>Date Of Birth</p>
      <input
        type="text"
        className="input-text"
        value={dateOfBirth}
        onChange={(e) => handleDateOfBirth(e.target.value)}
      />
    </label>
  );

  const messageDate = <div>The date must be in DD/MM/YYYY format</div>;

  const usernameComponent = (
    <label>
      <p>Username</p>
      <input
        type="text"
        className="input-text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </label>
  );

  const passwordComponent = (
    <label>
      <p>Password</p>
      <input
        type="password"
        className="input-text"
        value={password}
        onChange={(e) => handlePassword(e.target.value)}
      />
    </label>
  );

  const messagePassword = (
    <div>
      The password must have at least one uppercase, one lowercase, one number,
      one symbol and have a length of 12.
    </div>
  );

  const buttonLogin = (
    <button className="button-login" type="submit">
      Log In
    </button>
  );

  const buttonRegister = (
    <button className="button-register" type="submit">
      Sign Up
    </button>
  );
  
  const errorInformation = (
    <div className="information-message">{ responseMessage }</div>
  )

  const buttonSelectRegister = (
    <div className="button-container">
      <div className="horizontal-line"></div>
      <button className="button-register" onClick={() => setIsNewAccount(true)}>
        Create new account
      </button>
    </div>
  );

  return (
    <div className="container-login">
      <form className="container-form" onSubmit={handleSubmit}>
        {isNewAccount && nameComponent}
        {isNewAccount && dateOfBirthComponent}
        {isNewAccount && !isValidDate && messageDate}
        {usernameComponent}
        {passwordComponent}
        {!isValidPassword && messagePassword}
        {!isNewAccount && buttonLogin}
        {isNewAccount && buttonRegister}
      </form>
      {isMessage && errorInformation}
      {!isNewAccount && buttonSelectRegister}
    </div>
  );
}
