// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/
import { jsx as _jsx } from "react/jsx-runtime";
import Example from "https://framer.com/m/framer/Example.js@^1.0.0";
/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */ export default function Button(props) {
  // This is a React component containing an Example component
  // - Replace <Example /> with your own code
  // - Find inspiration: https://www.framer.com/developers/
  return /*#__PURE__*/ _jsx("div", {
    style: containerStyle,
    children: /*#__PURE__*/ _jsx(Example, {}),
  });
} // Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Button",
      slots: [],
      annotations: {
        framerSupportedLayoutWidth: "auto",
        framerSupportedLayoutHeight: "auto",
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Button.map
