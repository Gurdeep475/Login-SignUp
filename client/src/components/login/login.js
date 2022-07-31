import "./login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginUser}) => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    function login() {
        const { email, password } = user;
        if (!email || !password) {
            alert("Please Fill all the Fields");
        }
        else {
            const sendUser = { username: email, password: password };
            axios
                .post("http://localhost:4000/auth/login", sendUser)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.error !== undefined) {
                        alert(res.data.error);
                    } else {
                        setLoginUser(res.data.user);
                        alert("LoggedIn Successfully");
                        setLoginUser(sendUser);
                    }
                });
        }
    }

    let navigate  = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    )
}

export default Login