import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import img from "../../images/login-logo.png";


export default function Login() {
    return (
        <div className="login">
            <div className="image">
                <img 
                    src={img} 
                    alt="Login"
                />
            </div>
            <div className="title">
                <p>Go Rich</p>
            </div>
            <div>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder="Username"
                />
            </div>
            <div>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    placeholder="Password"
                />
            </div>
            <div className="login-button">
                <Link to="/dashboard">
                    <button 
                        type="submit"
                    >
                        Login
                    </button>
                </Link>
            </div>
            <div className="register-link">
                <Link to="/register">
                    Register
                </Link>
            </div>
            <div className="footer">
                The best expense control app
            </div>            
        </div>
    )
}