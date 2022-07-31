import "./register.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function register() {
    const { name, email, password, confirmPassword } = user;
    if (!name || !email || !password || !confirmPassword) {
      alert("Please Fill all the Fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const sendUser = { username: email, password: password };
      axios
        .post("http://localhost:4000/auth/register", sendUser)
        .then((res) => {
          if(res.data.error !== undefined){
            alert(res.data.error);
          } else alert(res.data.message);
        });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  let navigate = useNavigate();
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => {navigate("/login")}}>
        Login
      </div>
    </div>
  );
};

export default Register;
