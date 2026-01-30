import React, { useState, useEffect } from "react";
import LoaderMoon from "./LoaderMoon.jsx";
import * as api from "../../api/api.js";
import LandingImages from "./LandingImages.jsx";
import Error from "./Error.jsx";

export default function Home() {

    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(false);
    const [thumbnails, setThumbnails] = useState({});

    useEffect(() => {
        api.getThumbnails().then(({ data }) => {
            if(data === undefined){
                setError(true);
                return;
            }
            else {
                isLoading(false);
                setThumbnails(data.data);
            }
        }).catch((error) => {
            setError(true);
            console.log(error, "error")
        })
    }, []
    );


    if(loading){
        return <LoaderMoon />
    };

    return (
        <div>
            {error ? <Error />
            :
            <div>
                <LandingImages thumbnails={thumbnails} />
            </div>
            }
        </div>
    );
};