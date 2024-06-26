import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { addPropertyControls, ControlType } from "framer"; // Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/
/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ export default function Example(props) {
  const { tint, style } = props;
  const [active, setActive] = useState(false);
  return /*#__PURE__*/ _jsx(motion.div, {
    style: { ...style, ...containerStyle },
    children: /*#__PURE__*/ _jsx(motion.div, {
      onTap: () => setActive(!active),
      style: {
        margin: 50,
        padding: 75,
        borderRadius: 30,
        backgroundColor: tint,
      },
      whileHover: { rotate: 90 },
      animate: { scale: active ? 1.25 : 1 },
    }),
  });
}
Example.defaultProps = { tint: "#09F" };
addPropertyControls(Example, {
  tint: { title: "Tint", type: ControlType.Color },
});
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
      name: "Example",
      slots: [],
      annotations: {
        framerSupportedLayoutWidth: "any",
        framerContractVersion: "1",
        framerSupportedLayoutHeight: "any",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Example.map
