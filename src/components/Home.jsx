import React, { useState, useEffect } from 'react';
import Loader from "./Loader.jsx";
import * as api from "../../api/api.js";
import LandingImages from './LandingImages.jsx';

export default function Home() {

    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(false);
    const [thumbnails, setThumbnails] = useState({});

    useEffect(() => {
        api.getThumbnails().then(({ data }) => {
            console.log(data.data, "this is the data here <<<<<");
            setThumbnails(data.data);
            isLoading(false);
        }).catch((error) => {
            setError(true);
            console.log(error, "error")
        })
    }, []
    );


    if(loading){
        return <Loader />
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