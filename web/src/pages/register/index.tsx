import React from "react";

import "./style.css";

import img from "../../images/login-logo.png";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="login">
            <div className="image">
                <img 
                    className="register-img"
                    src={img} 
                    alt="Login"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="first-name" 
                    id="first-name"
                    placeholder="First Name"
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="surname" 
                    id="surname"
                    placeholder="Surname"
                />
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
            <div>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    placeholder="Confirm Password"
                />
            </div>
            <div className="login-button">
                <Link to="/register-success">
                <button 
                    type="submit"
                >
                    Complete Register
                </button>
                </Link>
            </div>        
        </div>
    )
}