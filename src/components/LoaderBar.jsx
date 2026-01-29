import React from "react";
import BarLoader from "react-spinners/BarLoader";

export default function LoaderBar () {

    return (
        <div className="loader-wrapper">
            <BarLoader 
                loading={true}
                color="#000000"
                speedMultiplier={1}
            />
        </div>
    );
};