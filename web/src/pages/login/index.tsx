import React from "react";

import "./style.css"

import img from "../images/login-logo.png"

export default function Login(){
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
                <button 
                    type="submit"
                >
                    Login
                </button>
            </div>
            <div className="register-link">
                Register
            </div>
            <div className="footer">
                The best expense control app
            </div>            
        </div>
    )
}