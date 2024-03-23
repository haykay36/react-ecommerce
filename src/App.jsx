import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import Login from "./page/login/login";
import Register from "./page/register/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
