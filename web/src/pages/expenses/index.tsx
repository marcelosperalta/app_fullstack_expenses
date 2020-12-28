import React from "react";
import { Link } from "react-router-dom";

import "./style.css"

export default function Expenses() {
    return (
        <div className="login dashboard budget expenses">

            <div className="dashboard-container">
                <div className="back">
                    <Link className="next-button" to="/dashboard">
                       &lt;
                    </Link>
                </div>

                <div>
                    <h1 className="h1-dashboard">
                        Expenses
                    </h1>
                </div>

                <div className="week-month-container">
                    <div className="week">
                        <div className="week-number">
                            New Expense
                        </div>

                        <div className="planned">
                            <div id="test">
                                Value:
                            </div>
                            <div>
                                15.00 €
                            </div>
                        </div>

                        <div className="remaining">
                            <div>
                                Category:
                            </div>
                            <div>
                                Grocery
                            </div>
                        </div>

                        <hr/>

                        <div className="save-clean">
                            <Link id="link" to="">
                                <div className="save">
                                    Save
                                </div>
                            </Link>
                            <Link to="">
                                <div className="clean">
                                    Clean
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="month">
                        <div className="month-name">
                            Last Inputs
                        </div>

                        <div className="inputs">
                            <div>
                                Grocery:
                            </div>
                            <div>
                                27/08/2020
                            </div>
                            <div>
                                35.96 €
                            </div>
                        </div>

                        
                        <div className="inputs">
                            <div>
                                Pets:
                            </div>
                            <div>
                                26/08/2020
                            </div>
                            <div>
                                32.00 €
                            </div>
                        </div>
                        
                        <div className="inputs">
                            <div>
                                Fun:
                            </div>
                            <div>
                                24/08/2020
                            </div>
                            <div>
                                75.94 €
                            </div>
                        </div>

                        <div className="remaining">
                            <div>
                                Today:
                            </div>
                            <div>
                                143.90 €
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reports-container">
                    <Link to="">
                        <div className="reports">
                                Edit Expenses
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}