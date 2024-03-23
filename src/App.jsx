import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./page/login/login";
import Register from "./page/register/register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={<Login />} />
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
