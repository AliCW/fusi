import React, { useState, useEffect } from 'react';
import LoaderMoon from "./LoaderMoon.jsx";
import * as api from "../../api/api.js";
import LandingImages from './LandingImages.jsx';

export default function Home() {

    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(false);
    const [thumbnails, setThumbnails] = useState({});

    useEffect(() => {
        api.getThumbnails().then(({ data }) => {
            setThumbnails(data.data);
            isLoading(false);
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
            {error ? <h1>Error</h1>
            :
            <div>
                <LandingImages thumbnails={thumbnails} />
            </div>
            }
        </div>
    );
};