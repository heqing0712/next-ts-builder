import React from "react";
import { SectionSettings } from "./SectionSettings";
import { Resizer } from "../Resizer";
import { PlusIcon } from "@radix-ui/react-icons";
import { useCjEditorStore } from "@/app/craftjs/store/editor";
export type SectionProps = {
  background: Record<"r" | "g" | "b" | "a", number>;
  color: Record<"r" | "g" | "b" | "a", number>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  padding: string[];
  margin: string[];
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  children: React.ReactNode;
  radius: number;
};

const defaultProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fillSpace: "no",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: "100%",
  height: "auto",
};

export const Section = (props: Partial<SectionProps>) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    children,
  } = props;

  const { setShowComponentsPannel } = useCjEditorStore();

  return (
    <Resizer
      enable={["top", "bottom"]}
      propKey={{ width: "width", height: "height" }}
      className="section-resizer"
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow:
          shadow === 0
            ? "none"
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        borderRadius: `${radius}px`,
        flex: fillSpace === "yes" ? 1 : "unset",
      }}
    >
      {children}
      <div
        className="btn-add-section"
        onClick={() => {
          setShowComponentsPannel(true);
        }}
      >
        <PlusIcon />
        {/* <span className="btn-add-tit">Add Section</span> */}
      </div>
    </Resizer>
  );
};

Section.craft = {
  displayName: "Section",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: SectionSettings,
  },
};
