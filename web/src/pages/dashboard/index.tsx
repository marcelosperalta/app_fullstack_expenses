import React from "react";
import { Link } from "react-router-dom";

import "./style.css"

export default function Dashboard() {
    return (
        <div className="login dashboard">
            <div className="next">
                <Link className="next-button" to="">
                   &gt;
                </Link>
            </div>

            <div>
                <h1 className="h1-dashboard">
                    Max Mustermann
                </h1>
            </div>
            <div className="week">
                <div>
                    Week 35
                </div>
                <div>
                    Planned budget:
                </div>
                <div>
                    150.00 €
                </div>
                <div>
                    Remaining budget:
                </div>
                <div>
                    -32.00 €
                </div>
                <hr/>
                <div>
                    Expenses
                </div>
                <div>
                    Budget
                </div>
            </div>
            <div className="month">
                <div>
                    August
                </div>
                <div>
                    Planned budget:
                </div>
                <div>
                    1850.00 €
                </div>
                <div>
                    Remaining budget:
                </div>
                <div>
                    432.00 €
                </div>
                <hr/>
                <div>
                    Expenses
                </div>
                <div>
                    Budget
                </div>
            </div>
            <div>
                View Reports
            </div>
        </div>
    )
}