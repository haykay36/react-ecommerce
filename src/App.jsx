import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Login from "./page/login/login";
import Register from "./page/register/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
