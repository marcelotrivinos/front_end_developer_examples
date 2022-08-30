# Front-End Developer Portfolio

### To Download
```
git clone git@github.com:marcelotrivinos/front_end_developer_portfolio.git
```

### To enter the folder with all the examples
```
cd git@github.com:marcelotrivinos/front_end_developer_portfolio
```

## 01_class_component
### Class Components (componentDidMount, componentWillUnmount and componentDidUpdate), CSS (Flexbox, Dynamic Styles (box-shadow, hover, focus, activate, etc), transform, rem unit), Javascript (setTimeout, alert, event.preventDefault), HTML (form, label, input, table, thead, thbody, tr and th).

Four examples using class component.

A digital clock.  
A counter with increment, decrement and reset button.  
A user input that shows the data entered in an alert.  
A select that allows you to select an element and display its information in a table.  

```
cd 01_class_component
npm install
npm run start
```

## 02_router
### React Router (static and dynamic routing, useNavigate Hook), Bootstrap (d-flex), CSS (override Bootstrap class with CSS).

Five buttons and each leads to a different url. If the url entered in the browser does not exist then it leads to a Not Found page.

```
cd 02_router
npm install
npm run start
```

## 03_api_context
### Javascript (fetch (GET query, POST query), spread operator, async/await and then/catch, filter), Hooks (useState and useEffect), CSS (flexbox, flex-direction, flex-wrap, justify-content, rem unit), map function.

Performs a GET query to obtain the data from an API, and displays this data in the form of cards, it also gives
the possibility of entering a title and information to create a new card, this information is sent to the API
through a POST query (The API by default after each POST query eliminates the information received, so each
ID returned by the API is the same and when using the map function it will warn that there is a repeated key.).

```
cd 03_api_context
npm install
npm run start
```

## 04_login_and_register
### ExpressJS (express.json and cors middlewares), Axios (POST query), CSS, Token (localStorage), Custom Hook, Regular Expressions, Condicional Rendering, HTML (form, label, input (text and password type).

If there is no user token then the default login page is displayed. If
the entered user does not exist, the password is wrong, or a field is
missing, then the user is informed, it also gives the possibility of
registering a new user. If the registered user has the username
already registered, or there is a missing field to fill in, then the
user is informed, otherwise the new user is created and he or she
enters. If the password does not meet the security level or the date
is not in the correct format, then the user is informed.

#### client
```
cd 04_login_and_register
npm install
npm run start
```

#### server
```
cd 04_login_and_register
node server.js
```

## 05_redux
### Redux (actions and reducers), MaterialUI, Jest.

Tipical todo app.

```
cd 05_redux
npm install
npm run start
```

## 06_redux_thunk
### Redux, Redux-Thunk (asyncronic state), Promise, MaterialUI.

```
cd 06_redux_thunk
npm install
npm run start
```

## 07_
### Typescript, MaterialUI.

```
cd 07_
npm install
npm run start
```

## 08_react_native
### React Native.

```
cd 08_react_native
npm install
npm run start
```
