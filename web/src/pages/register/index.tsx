import React from "react";

import "./style.css"

import img from "../../images/login-logo.png"

export default function Login(){
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
                <button 
                    type="submit"
                >
                    Complete Register
                </button>
            </div>        
        </div>
    )
}