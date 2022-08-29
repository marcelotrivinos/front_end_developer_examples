const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 8080;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["POST"]
};

/* https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application */

app.use(express.json(), cors(corsOptions));

let users = [
  {
    name: "Aria",
    dateOfBirth: "25/01/1997",
    username: "Aria123",
    password: "123ARSDasdsf#"
  }
];

let response = {
  error: false,
  code: 200,
  message: "",
  token: ""
};

function generateToken() {
  let today = new Date();
  return today.getTime().toString();
}

/* https://developer.mozilla.org/es/docs/Web/HTTP/Status */

app.post("/login", (req, res) => {
  //console.log(req.body);
  //console.log(req.headers);
  //console.log(users);

  if (!req.body.username || !req.body.password) {
    response = {
      error: true,
      code: 502,
      message: "The username and password field are required",
      token: ""
    };
  } else {
    let username = req.body.username;
    let password = req.body.password;

    let userData = users.find((user) => user.username === username);

    if (userData) {
      if (userData.password === password) {
        response = {
          error: false,
          code: 200,
          message: "Ok",
          token: generateToken()
        };
      } else {
        response = {
          error: true,
          code: 501,
          message: "Password is incorrect",
          token: ""
        };
      }
    } else {
      response = {
        error: true,
        code: 501,
        message: "The user has not been created",
        token: ""
      };
    }
  }
  res.send(response);
});

app.post("/register", (req, res) => {

  if (
    !req.body.name ||
    !req.body.dateOfBirth ||
    !req.body.username ||
    !req.body.password
  ) {
    response = {
      error: true,
      code: 502,
      message:
        "The name, date of birth, username and password are required fields",
      token: ""
    };
  } else {
    let name = req.body.name;
    let dateOfBirth = req.body.dateOfBirth;
    let username = req.body.username;
    let password = req.body.password;
    
    let userData = users.find((user) => user.username === username);
	
    if (userData) {
      response = {
        error: true,
        code: 503,
        message: "The user was previously created",
        token: ""
      };
    } else {
      const user = {
        name: name,
        dateOfBirth: dateOfBirth,
        username: username,
        password: password
      };

      users.push(user);
      response = {
        error: false,
        code: 200,
        message: "User created",
        token: generateToken()
      };
    }
  }
  //console.log(users)
  res.send(response);
});

app.use((req, res, next) => {
  response = {
    error: true,
    code: 404,
    message: "URL not found",
    token: ""
  };
  res.status(404).send(response);
});

app.listen(port, () => {
  console.log("API is running on http://localhost:" + port + "/");
});
