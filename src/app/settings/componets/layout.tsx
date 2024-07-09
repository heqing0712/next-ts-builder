"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
export default function Layout() {
  const list = ["Stack", "Grid"];
  const size = "sm";
  function onSelectionChange(v) {
    console.log("tab", v);
  }
  return (
    <>
      <div className="s-brick brick-Size">
        <div className="brick-tit">Layout</div>
        <div className="brick-content">
          <div className="form-item">
            <div className="item-tit">type</div>
            <div className="item-val">
              <Tabs
                fullWidth={true}
                key={size}
                size={size}
                aria-label="Tabs sizes"
                onSelectionChange={onSelectionChange}
              >
                {list.map((val) => (
                  <Tab key={val} title={val} />
                ))}
              </Tabs>
            </div>
          </div>

          <div className="form-item">
            <div className="item-tit"></div>
            <div className="item-val"></div>
          </div>
        </div>
      </div>
    </>
  );
}
