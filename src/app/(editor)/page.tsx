"use client";
import "./scss/page.scss";
import Image from "next/image";
import React, { useLayoutEffect, useState,useRef } from "react";
import { MapInteractionCSS } from "@/libs/react-map-interaction-master";
import { BuilderTools } from "@/components/home/builder-tools";
import { useAppStore } from "@/store/app";

export default function Home() {
  const x = (window.innerWidth - 1680) / 2
 
  const {setMapInfo,setX,mapInfo,getMapInfo,disableZoom,disablePan} = useAppStore()
  function handleChange({ scale, translation }) {
    setMapInfo({ scale, translation })
    console.log('scale', scale)
  }
  setX(x)
  const  defaultValue  = getMapInfo()  
 

  return (
    <div className="builder-container">
 

      <div className="builder-sidebar builder-panel"></div>
      <div className="builder-main">
        <MapInteractionCSS
 
          defaultValue={defaultValue }
          onChange={handleChange}
          minScale={0.5}
          maxScale={5}
          disableZoom={disableZoom}
          disablePan={disablePan}
          translationBounds={{
            xMax: 10000,
            yMax: 10000,
          }}
        >
          <Image src="/img.jpg" alt="img" width={1680} height={1050} />
        </MapInteractionCSS>
      </div>
      <div className="builder-menu builder-panel"></div>
      <BuilderTools/>
    </div>
  );
}
