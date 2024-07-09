import * as React from "react";

import { Input } from "@/components/ui/input";
export default function Size() {
  return (
    <>
      <div className="s-brick brick-Size">
        <div className="brick-tit">Size</div>
        <div className="brick-content">
          <div className="form-item">
            <div className="item-tit">Width</div>
            <div className="item-val">
              <Input />
            </div>
          </div>
          <div className="form-item">
            <div className="item-tit">Height</div>
            <div className="item-val">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
