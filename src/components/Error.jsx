import React from "react";
import { Link } from "react-router";
import { BiErrorCircle } from "react-icons/bi";
import { LuArrowBigRightDash } from "react-icons/lu";
import { LuArrowBigLeftDash } from "react-icons/lu";

export default function Error(){
    return (
        <div className="bad-path-container">
            <div style={{"display": "flex", "flexDirection": "row"}}>
            <BiErrorCircle style={{"scale": "5"}}/>
                <h1 className="bad-path-header">Error</h1>
            <BiErrorCircle style={{"scale": "5"}}/>

            </div>
                
                    <Link
                        to="/"
                        className="error-link"
                    >
                <div className="error-link-wrapper">
                        <LuArrowBigRightDash />
                            Return Home   
                        <LuArrowBigLeftDash />
                </div>
                    </Link>
        </div>
    );
};