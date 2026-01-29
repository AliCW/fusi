import React, { useEffect, useState, Suspense } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import * as api from "../../api/api.js";
import LoaderMoon from "./LoaderMoon.jsx";
import ImageCard from "./ImageCard.jsx";

export default function SingleArtist () {

    const { artist } = useParams();
    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(false);
    const [images, setImages] = useState();
    const [params, setParams] = useState();
    // const fetchArtistInfo = await getArtistInfo(artist);

    
    console.log(artist, "PARAMS ARE HERE<<<<")
    console.log(images, "IMAGES")
    console.log(params, "setted PARAMS")

    if(params !== artist && params !== undefined){
        console.log("NOT HERE")
        window.location.reload();
    }
    
    useEffect(() => {
        api.getArtist(artist).then(( { data } ) => {
            setImages(data.data);
            isLoading(false);
            setParams(artist);
        }).catch((error) => {
            setError(true);
            console.log(error, "error")
        });
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
                <ImageCard images={images}/>
            </div>
            }
        </div>
    );
};