"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import {
  ArrowHorizontalIcon,
  ArrowVerticalIcon,
  AlignStartIcon,
  AlignCenterIcon,
  AlignEndIcon,
} from "@/assets/icons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon } from "@radix-ui/react-icons";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/utils";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function Layout() {
  return (
    <>
      <div className="s-brick brick-effects">
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="brick-hd">
              <div className="brick-tit">Effects</div>
              <div className="brick-act">
                <PlusIcon />
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-54">
            <ContextMenuItem inset>Hover</ContextMenuItem>
            <ContextMenuItem inset>Active</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        {/* <div className="brick-content" >
          <div className="form-item">
            <div className="item-tit">type</div>
            <div className="item-val"></div>
          </div>
        </div> */}
      </div>
    </>
  );
}
