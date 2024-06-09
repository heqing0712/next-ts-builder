import Arrow from "@/assets/icons/arrow.svg";
import Hand from "@/assets/icons/hand.svg";
import Message from "@/assets/icons/message.svg";
import ThemeLight from "@/assets/icons/themeLight.svg";
import ThemeDark from "@/assets/icons/themeDark.svg";
import { BuilderToolsEnum } from "@/configs/enums/BuilderToolsEnum";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { getMapInfo, useAppStore } from "@/store/app";
type Checked = DropdownMenuCheckboxItemProps["checked"];

export function BuilderTools() {

  const {scalePs,activeTool, setActiveTool,mapRef} = useAppStore()
  const { theme, setTheme } = useTheme();

  /**
   * 放大
   */
  function handleZoom() {
   getMapInfo()?.changeScalePlus()
  }
  
  /**
   * 放大
   */
  function handleZoomIn() {
    getMapInfo()?.changeScalePlus()
  }
  
  /**
   * 缩小
   */
  function handleZoomOut() {
    getMapInfo()?.changeScaleMinus()
  }
  
  /**
   * 重置
   */
  function handleZoomReset() {
    getMapInfo()?.changeScaleReset()
  }
  
  /**
   * 缩放到最小值
   */
  function handleZoomMin(){
    getMapInfo()?.changeScaleMin()
  }

  return (
    <>
      <div className="builder-tools">
        <div className="tools-item">
          <div
            onClick={()=>setActiveTool(BuilderToolsEnum.ARROW)}
            className={[
              "tools-icon",
              activeTool === BuilderToolsEnum.ARROW ? "is-active" : "",
            ].join(" ")}
          >
            <Arrow />
          </div>
        </div>
        <div className="tools-item">
          <div
               onClick={()=>setActiveTool(BuilderToolsEnum.HAND)}
            className={[
              "tools-icon",
              activeTool === BuilderToolsEnum.HAND ? "is-active" : "",
            ].join(" ")}
          >
            <Hand />
          </div>
        </div>
        <div className="tools-item">
          <div
           onClick={()=>setActiveTool(BuilderToolsEnum.MESSAGE)}
            className={[
              "tools-icon",
              activeTool === BuilderToolsEnum.MESSAGE ? "is-active" : "",
            ].join(" ")}
          >
            <Message />
          </div>
        </div>
        <div className="tools-item">
          <div
            className={[
              "tools-icon",
              activeTool === BuilderToolsEnum.THEME ? "is-active" : "",
            ].join(" ")}
          >
            {theme === "dark" ? 
              <ThemeLight onClick={() => setTheme("light")} />
             : 
              <ThemeDark onClick={() => setTheme("dark")} />
            }
          </div>
        </div>

        <div className="tools-item zoom-dropdown-menu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="zoom-dropdown-menu-val">
                <span className="sel-val">{ scalePs}%</span>
                <ChevronDownIcon/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 zoom-dropdown-menu-sel" align="start">
        
              <DropdownMenuGroup>
              <DropdownMenuItem >
                <div className="zoom-dropdown-menu-item" onClick={handleZoom}>
                <div className="item-l">Zoom</div>
                <div className="item-r">Z</div>
              </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="zoom-dropdown-menu-item" onClick={handleZoomIn}>
                <div className="item-l">Zoom In</div>
                <div className="item-r">Ctrl+=</div>
              </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem>
                <div className="zoom-dropdown-menu-item" onClick={handleZoomOut}>
                <div className="item-l">Zoom Out</div>
                <div className="item-r">Ctrl+-</div>
              </div>
              </DropdownMenuItem>
       

              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>

              <DropdownMenuItem>
                <div className="zoom-dropdown-menu-item" onClick={handleZoomReset}>
                <div className="item-l">Zoom to 100%</div>
                <div className="item-r">Shif+0</div>
              </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
              <div className="zoom-dropdown-menu-item"  onClick={handleZoomMin}>
                <div className="item-l">Shif to Fix</div>
                <div className="item-r">Shif+1</div>
              </div>
              </DropdownMenuItem>
                </DropdownMenuGroup>


            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
