import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

export default function Loader() {
    return (
        <div className="loader-wrapper">
            <MoonLoader 
                loading={true}
                color="#000000"
                speedMultiplier={1}
                className="loader"
            />
        </div>
    );
};