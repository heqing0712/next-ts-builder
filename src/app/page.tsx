"use client";
import "./scss/page.scss";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import { MapInteractionCSS } from "@/lib/react-map-interaction-master";
import { BuilderTools } from "@/components/home/builder-tools";
export default function Home() {
  const x = (window.innerWidth - 1680) / 2
  
  console.log('x',x)
  const [mapInfo, setMapInfo]= useState({
    scale: 1,
    translation: { x:x, y: 20 }
  })
console.log(mapInfo)
 

  
  return (
    <div className="builder-container">
 

      <div className="builder-sidebar builder-panel"></div>
      <div className="builder-main">
        <MapInteractionCSS
          showControls
          defaultValue={ mapInfo}
          onChange={({ scale, translation }) =>  setMapInfo ({ scale, translation })}
          minScale={0.5}
          maxScale={5}
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
