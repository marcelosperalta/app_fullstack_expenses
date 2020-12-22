import React from "react";
import { Link } from "react-router-dom";

import "./style.css"

export default function Budget() {
    return (
        <div className="login dashboard budget">

            <div className="dashboard-container">
                <div className="back">
                    <Link className="next-button" to="/dashboard">
                       &lt;
                    </Link>
                </div>

                <div>
                    <h1 className="h1-dashboard">
                        Budget
                    </h1>
                </div>

                <div className="week-month-container">
                    <div className="week">
                        <div className="week-number">
                            New Budget
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
                                Motherlode
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
                                Salary:
                            </div>
                            <div>
                                27/08/2020
                            </div>
                            <div>
                                2854.96 €
                            </div>
                        </div>

                        
                        <div className="inputs">
                            <div>
                                YouTube:
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
                                Friend:
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
                                2962.90 €
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reports-container">
                    <Link to="">
                        <div className="reports">
                                Edit Budget
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}