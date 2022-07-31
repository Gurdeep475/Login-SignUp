import React from "react";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
const App = () => {
  const [loginUser, setLoginUser] = React.useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={loginUser? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
