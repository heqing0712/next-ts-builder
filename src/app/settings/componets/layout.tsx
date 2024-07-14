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
import { Slider } from "@/components/ui/slider";
import { cn } from "@/utils";
type SliderProps = React.ComponentProps<typeof Slider>;
export default function Layout() {
  const typeList = ["Stack", "Grid"];
  const directionList = ["Horizontal", "Vertical"];
  const alignList = ["Start", "Center", "End"];
  const wrapList = ["Yes", "No"];
  const distributeList = [
    "Start",
    "Center",
    "End",
    "Space-Between",
    "Space-Around",
    "Space-Evenly",
  ];
  const [activeTab, setActiveTab] = useState(typeList[0]);
  const [gap, setGap] = useState(0);
  const size = "sm";
  const iconMap = {
    Horizontal: ArrowHorizontalIcon,
    Vertical: ArrowVerticalIcon,
    Start: AlignStartIcon,
    Center: AlignCenterIcon,
    End: AlignEndIcon,
  };

  /**
   *
   * @param name 加载 图标组件
   */
  const loadIconComponent = (name: string) => {
    const Component = iconMap[name];
    return Component ? <Component /> : null;
  };

  /**
   * tab 切换
   * @param v
   */
  function onLayoutTypeChange(v: string) {
    console.log("tab", v);
    setActiveTab(v);
  }

  function onDirectionChange() {}
  function onAlignChange() {}
  function onWrapChange() {}
  function onGapValueChange(v: number[]) {
    console.log("gap", v[0]);
    setGap(v);
  }
  return (
    <>
      <div className="s-brick brick-layout">
        <div className="brick-tit">Layout</div>
        <div className="brick-content">
          <div className="form-item">
            <div className="item-tit">type</div>
            <div className="item-val">
              <Tabs
                fullWidth={true}
                key={size}
                size={size}
                aria-label="Type"
                onSelectionChange={onLayoutTypeChange}
              >
                {typeList.map((val) => (
                  <Tab key={val} title={val} />
                ))}
              </Tabs>
            </div>
          </div>

          <div className="form-item">
            <div className="item-tit">Direction</div>
            <div className="item-val">
              <Tabs
                fullWidth={true}
                key={size}
                size={size}
                aria-label="Direction"
                onSelectionChange={onDirectionChange}
              >
                {directionList.map((val) => (
                  <Tab key={val} title={loadIconComponent(val)}></Tab>
                ))}
              </Tabs>
            </div>
          </div>

          <div className="form-item">
            <div className="item-tit">Distribute</div>
            <div className="item-val">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Distribute" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {distributeList.map((v) => (
                      <SelectItem value={v}>{v.replace("-", " ")}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="form-item">
            <div className="item-tit">Align</div>
            <div className="item-val">
              <Tabs
                fullWidth={true}
                key={size}
                size={size}
                aria-label="Align"
                onSelectionChange={onAlignChange}
              >
                {alignList.map((val) => (
                  <Tab key={val} title={loadIconComponent(val)}></Tab>
                ))}
              </Tabs>
            </div>
          </div>
          <div className="form-item">
            <div className="item-tit">Wrap</div>
            <div className="item-val">
              <Tabs
                fullWidth={true}
                key={size}
                size={size}
                aria-label="Wrap"
                onSelectionChange={onWrapChange}
              >
                {wrapList.map((val) => (
                  <Tab key={val} title={val}></Tab>
                ))}
              </Tabs>
            </div>
          </div>
          <div className="form-item form-item-gap">
            <div className="item-tit">Gap</div>
            <div className="item-vals">
              <div className="item-val">
                <Input value={gap} />
              </div>
              <div className="item-val">
                <Slider
                  onValueChange={onGapValueChange}
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className={cn("w-[100%]")}
                />
              </div>
            </div>
          </div>
          <div className="form-item">
            <div className="item-tit">Padding</div>
            <div className="item-val">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
