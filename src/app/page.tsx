 
"use client"
import "./scss/page.scss";
import { Panel, PanelGroup, PanelResizeHandle } from "@/components/layout/base-resizable";
import React, { useLayoutEffect, useState } from "react";

export default function Home() {
  const defaultWidth = 300
  const [defaultSize, setDefaultSize] = useState(11.2)

 
 

  return (
    <PanelGroup direction="horizontal"  id="group" >
    <Panel className="builder-sidebar" defaultSize={defaultSize}  minSize={defaultSize}   >
     
    </Panel>
    <PanelResizeHandle />
    <Panel className="builder-main" >
 
    </Panel>
    <PanelResizeHandle />
 
    <Panel class="builder-setting"   defaultSize={defaultSize}  minSize={defaultSize} >
 
    </Panel>
  </PanelGroup>
  );
}
