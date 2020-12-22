import React from "react";
import { Link } from "react-router-dom";

import "./style.css"

export default function Budget() {
    return (
        <div className="login dashboard">

            <div className="dashboard-container">
                <div className="next">
                    <Link className="next-button" to="/investments">
                       &gt;
                    </Link>
                </div>

                <div>
                    <h1 className="h1-dashboard">
                        Max Mustermann
                    </h1>
                </div>

                <div className="week-month-container">
                    <div className="week">
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
                    </div>
                </div>

                <div className="reports-container">
                    <Link to="/reports">
                        <div className="reports">
                                View Reports
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}