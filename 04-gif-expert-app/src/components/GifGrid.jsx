import React, { useState } from "react";
import { useEffect } from "react";
import getGifs from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<p>Loading...</p>)
      }
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image}></GifItem>;
        })}
      </div>
    </>
  );
};
