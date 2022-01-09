import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import s from './ImageGallary.module.scss' 

const ImageGallery = () => { 
   return(
    <ul className={s.List}>
        <ImageGalleryItem/>
    </ul>
)
}


export default ImageGallery;