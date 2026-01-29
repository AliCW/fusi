import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { formatMediumsAndSurfaces } from "../utils/utils";
import LoaderMoon from "./LoaderMoon.jsx";

export default function ImageCard({ images }){
    const [open, setOpen] = useState(false);
    const [imagesIndex, setImagesIndex] = useState(0);

    const updateIndex = ({ index: current }) => setImagesIndex(current);

    const openBox = () => {
        if(!open){
            setOpen(true);
        } else if (open){
            setOpen(false);
        };
    };

    const isLast = (index, length) => {
        if(index === length - 1) {
            return true;
        };
        return false;
    };

    if(images === undefined){
        return <LoaderMoon />
    };

    return (
        <div className="artist-images-grid">
            {/* <div className="artist-bio-wrapper">
                <p>{bio[0].description}</p>

            </div> */}
            {images.map((image, index) => {
                return (
                    <div key={index} className={isLast(index, images.length) ? "artist-image-wrapper offset-artist" : "artist-image-wrapper"}>    
                        <img
                            className="artist-image"
                            src={image.raw_link}
                            onClick={() => openBox(index)}
                        />
                        <p className="artist-image-text">{image.name}</p>
                        <p className="artist-image-text">{formatMediumsAndSurfaces(image.mediums)} on {formatMediumsAndSurfaces(image.surfaces)}</p>
                    </div>
                )
            })}
            {open &&

                <Lightbox
                index={imagesIndex}
                open={open}
                close={() => openBox()}
                slides={images.map((image) => {
                    return { "src" : image.raw_link }
                })}
                on={{
                    view: updateIndex,
                    click: openBox
                }}
                />
            }
        </div>
    );
};