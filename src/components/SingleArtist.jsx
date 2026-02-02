import React, { useEffect, useState, Suspense } from "react";
import { useParams, useNavigate } from "react-router";
import * as api from "../../api/api.js";
import LoaderMoon from "./LoaderMoon.jsx";
import ImageCard from "./ImageCard.jsx";
import NotFound from "./NotFound.jsx";

export default function SingleArtist () {
    const navigate = useNavigate();
    const { artist } = useParams();
    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(false);
    const [images, setImages] = useState();
    const [params, setParams] = useState();
    // const fetchArtistInfo = await getArtistInfo(artist);

    console.log(params, "params")
    console.log(artist, "artust")
    

    if(params !== artist && params !== undefined){ //detect parameter change & force refresh to trigger useEffect
        window.location.reload();
    };
    
    useEffect(() => {
        api.getArtist(artist).then((  data  ) => {
            isLoading(false);
            setParams(artist);
            if(data.status === 200){
                setImages(data.data.data);
                return;
            }
            else {
                navigate("/not_found", { replace: true });
            };
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
            {error ? <NotFound/>
            :
            <div>
                <ImageCard images={images}/>
            </div>
            }
        </div>
    );
};