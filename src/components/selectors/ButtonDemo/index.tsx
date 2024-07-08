import { Element, useNode } from "@/libs/craftjs/core";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Box } from "../Box/index";
import { Text } from "../Text";
import Draggable from "react-draggable";
export const ButtonDemo = (props: any) => {
  const { text, textComponent, color, ...otherProps } = props;
  const [size, setSize] = useState({
    width: "auto",
    height: "auto",
  });
  return (
    <Box
      {...props}
      display="inline-flex"
      onResizeFn={(v) => {
        console.log("size", v);
        setSize(v);
      }}
    >
      <Button style={{ ...size }}>按钮</Button>
    </Box>
  );
};

ButtonDemo.craft = {
  ...Box.craft,
  displayName: "ButtonDemo",
};
