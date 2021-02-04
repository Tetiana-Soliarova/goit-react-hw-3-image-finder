import React from "react";
//import styles from "./imageGalleryItem.module.css";

export default function ImageGalleryItem({ images, onClick }) {
  return (
    <>
      {images.map((image) => (
        <li key={image.id}>
          <img
            onClick={onClick}
            src={image.webformatURL}
            data-sourse={image.largeImageURL}
            alt={image.tags}
          />
        </li>
      ))}
    </>
  );
}
