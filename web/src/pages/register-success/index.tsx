import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function RegisterSuccess() {
    return (
        <div className="login register-success">
            <div>
                <h1>Success!</h1>
            </div>

            <div>
                <p>Thanks for completing your registration!</p>
            </div>
            
            <div>
                <Link to="">
                    &gt;
                </Link>
                <p>Continue</p>
            </div>
        </div>
    )
}