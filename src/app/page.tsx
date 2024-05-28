 
"use client"
import "./scss/page.scss";
import { Panel, PanelGroup, PanelResizeHandle } from "@/components/layout/base-resizable";
import React, { useLayoutEffect, useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";
export default function Home() {
    
  // autoSaveId="persistence" 
  return (

    <div className="builder-container">
      {/* <PanelGroup direction="horizontal" className="panel-container"    >
    <Panel className="panel-left" defaultSize={12}>
    </Panel>
    <PanelResizeHandle />
    <Panel className="panel-center" >
    </Panel>
    <PanelResizeHandle />
    <Panel className="panel-right"  defaultSize={12}   >
    </Panel>
  </PanelGroup> */}
      
             <div className="builder-sidebar builder-panel"></div>
             <div className="builder-main"  >
          
          <MapInteractionCSS
        showControls
        defaultValue={{
          scale: 1,
          translation: { x: 0, y: 20 }
        }}
        minScale={0.5}
        maxScale={5}
        translationBounds={{
          xMax: 10000,
          yMax:10000
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="test"
          width="100%"
        />
            </MapInteractionCSS>
            
  
      </div>
      
      <div className="builder-menu builder-panel"></div>
    </div>
    
  );
}
