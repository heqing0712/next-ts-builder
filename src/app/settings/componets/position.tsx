import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Postion() {
  return (
    <>
      <div className="s-brick brick-position">
        <div className="brick-tit">Position</div>
        <div className="brick-content">
          <div className="form-item">
            <div className="item-tit">Type</div>
            <div className="item-val">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="absolute">Absolute</SelectItem>
                    <SelectItem value="relative">Relative</SelectItem>
                    <SelectItem value="fixed">fixed</SelectItem>
                    <SelectItem value="sticky">sticky</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
