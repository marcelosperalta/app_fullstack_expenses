import React from "react";
import { Link } from "react-router-dom";

import "./style.css"

export default function Reports() {
    return (
        <div className="login dashboard investments">

            <div className="dashboard-container">
                <div className="back">
                    <Link className="next-button" to="/dashboard">
                       &lt;
                    </Link>
                </div>

                <div>
                    <h1 className="h1-dashboard">
                        Reports
                    </h1>
                </div>

                <div className="week-month-container">
                    {/* <div className="week">
                        <div className="week-number">
                            Week 35
                        </div>

                        <div className="planned">
                            <div id="test">
                                Planned budget:
                            </div>
                            <div>
                                150.00 €
                            </div>
                        </div>

                        <div className="remaining">
                            <div>
                                Remaining budget:
                            </div>
                            <div>
                                -32.00 €
                            </div>
                        </div>

                        <hr/>

                        <div className="expenses-budget">
                            <div>
                                Expenses
                            </div>
                            <div>
                                Budget
                            </div>
                        </div>
                    </div>

                    <div className="month">
                        <div className="month-name">
                            August
                        </div>

                        <div className="planned">
                            <div>
                                Planned budget:
                            </div>
                            <div>
                                1850.00 €
                            </div>
                        </div>

                        <div className="remaining">
                            <div>
                                Remaining budget:
                            </div>
                            <div>
                                432.00 €
                            </div>
                        </div>

                        <hr/>

                        <div className="expenses-budget">
                            <div>
                                Expenses
                            </div>
                            <div>
                                Budget
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="reports-container">
                    <div className="reports">
                        View More
                    </div>
                </div>
            </div>
        </div>
    )
}