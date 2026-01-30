import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoaderMoon from "./LoaderMoon.jsx";
import formatName from "../utils/utils.js";

export default function LandingImages({ thumbnails }){

    const isLast = (index, length) => {
        if(index === length - 1){
            return true;
        };
        return false;
    };

    if(thumbnails === undefined){
        return <LoaderMoon />
    };

    return (
        <div className="landing-images-grid">
            {thumbnails.map((thumbnail, index) => {
                return (
                    <div key={thumbnail.name} className={isLast(index, thumbnails.length) ? "landing-image-wrapper offset-landing" : "landing-image-wrapper"}>
                        <Link to={`/artists/${thumbnail.artist}`} className="link">
                            <img
                                src={thumbnail.raw_link}
                                height="500"
                                width="500"
                                className="landing-image"
                            />
                            <p className="landing-image-artist active">
                                {formatName(thumbnail.artist)}
                            </p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};