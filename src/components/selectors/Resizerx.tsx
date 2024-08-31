"use client";
import { useNode, useEditor } from "@/libs/craftjs/core";
import cx from "classnames";
import { debounce } from "debounce";
import { Resizable } from "re-resizable";
import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import {
  isPercentage,
  pxToPercent,
  percentToPx,
  getElementDimensions,
} from "../../utils/numToMeasurement";

const Indicators = styled.div<{ bound?: "row" | "column" }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  span {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 100%;
    display: block;
    box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.25);
    z-index: 99999;
    pointer-events: none;
    border: 2px solid var(--ai-primary);
    &:nth-child(1) {
      ${(props) =>
        props.bound
          ? props.bound === "row"
            ? `
                left: 50%;
                top: -5px;
                transform:translateX(-50%);
              `
            : `
              top: 50%;
              left: -5px;
              transform:translateY(-50%);
            `
          : `
              left: -5px;
              top:-5px;
            `}
    }
    &:nth-child(2) {
      right: -5px;
      top: -5px;
      display: ${(props) => (props.bound ? "none" : "block")};
    }
    &:nth-child(3) {
      ${(props) =>
        props.bound
          ? props.bound === "row"
            ? `
                left: 50%;
                bottom: -5px;
                transform:translateX(-50%);
              `
            : `
                bottom: 50%;
                left: -5px;
                transform:translateY(-50%);
              `
          : `
              left: -5px;
              bottom:-5px;
            `}
    }
    &:nth-child(4) {
      bottom: -5px;
      right: -5px;
      display: ${(props) => (props.bound ? "none" : "block")};
    }
  }
`;

export const Resizerx = (props) => {
  const { propKey, children, flex, inlineFlex } = props;
  const nodeObj = useNode((node) => ({
    parent: node.data.parent,
    active: node.events.selected,
    nodeWidth: node.data.props[propKey.width],
    nodeHeight: node.data.props[propKey.height],
    fillSpace: node.data.props.fillSpace,
  }));

  const {
    id,
    actions: { setProp, setNodeEvent },
    connectors: { connect },
    fillSpace,
    nodeWidth,
    nodeHeight,
    parent,
    active,
    x,
    y,
    inNodeContext,
  } = nodeObj;
  const [startingPos, setStartingPos] = useState({ x: x, y: y });
  const { isRootNode, parentDirection } = useEditor((state, query) => {
    return {
      parentDirection:
        parent &&
        state.nodes[parent] &&
        state.nodes[parent].data.props.flexDirection,
      isRootNode: query.node(id).isRoot(),
    };
  });

  const resizable = useRef<Resizable>(null);
  const isResizing = useRef<Boolean>(false);
  const editingDimensions = useRef<any>(null);
  const nodeDimensions = useRef(null);
  nodeDimensions.current = { width: nodeWidth, height: nodeHeight };
  const handleStop = (e, data) => {
    console.log(data);
    setStartingPos({ x: data.x, y: data.y });
    setProp((prop) => {
      prop.x = data.x;
      prop.y = data.y;
    }, 500);
  };
  /**
   * Using an internal value to ensure the width/height set in the node is converted to px
   * because for some reason the <re-resizable /> library does not work well with percentages.
   */
  const [internalDimensions, setInternalDimensions] = useState({
    width: nodeWidth,
    height: nodeHeight,
  });

  const updateInternalDimensionsInPx = useCallback(() => {
    const { width: nodeWidth, height: nodeHeight } = nodeDimensions.current;

    const width = percentToPx(
      nodeWidth,
      resizable.current &&
        getElementDimensions(resizable.current.resizable.parentElement).width
    );
    const height = percentToPx(
      nodeHeight,
      resizable.current &&
        getElementDimensions(resizable.current.resizable.parentElement).height
    );

    setInternalDimensions({
      width,
      height,
    });
  }, []);

  const updateInternalDimensionsWithOriginal = useCallback(() => {
    const { width: nodeWidth, height: nodeHeight } = nodeDimensions.current;
    setInternalDimensions({
      width: nodeWidth,
      height: nodeHeight,
    });
  }, []);

  const getUpdatedDimensions = (width, height) => {
    const dom = resizable.current.resizable;
    if (!dom) return;

    const currentWidth = parseInt(editingDimensions.current.width),
      currentHeight = parseInt(editingDimensions.current.height);

    return {
      width: currentWidth + parseInt(width),
      height: currentHeight + parseInt(height),
    };
  };

  useEffect(() => {
    if (!isResizing.current) updateInternalDimensionsWithOriginal();
  }, [nodeWidth, nodeHeight, updateInternalDimensionsWithOriginal]);

  useEffect(() => {
    const listener = debounce(updateInternalDimensionsWithOriginal, 1);
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [updateInternalDimensionsWithOriginal]);

  const defaultEnable = [
    "top",
    "left",
    "bottom",
    "right",
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
  ];
  /**
   * 四角
   */
  const fourHorn = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

  const currentEnable = props.enable || defaultEnable;
  const item = currentEnable.find((d) => fourHorn.includes(d));
  //console.log(item);
  /**
   * 没有四角
   */
  const isNoFourHorn = !currentEnable.find((d) => fourHorn.includes(d));

  const getEnable = currentEnable.reduce((acc: any, key) => {
    acc[key] = active && inNodeContext;
    return acc;
  }, {});
  const _props = { ...props };
  delete _props.propKey;

  function onStart() {
    console.log(nodeObj);
    // 设置为拖拽中
    setNodeEvent("draging", [id]);
  }
  function onStop() {
    // 清空拖拽中事件
    setNodeEvent("draging", null);
  }
  function onDrag() {}
  return (
    <Draggable onStart={onStart} onStop={onStop} onDrag={onDrag}>
      <Resizable
        enable={getEnable}
        className={cx([
          {
            "m-auto": isRootNode,
            flex: flex !== undefined || inlineFlex !== true ? true : flex,
            "inline-flex": inlineFlex === true,
          },
        ])}
        ref={(ref) => {
          if (ref) {
            resizable.current = ref;
            connect(resizable.current.resizable);
          }
        }}
        size={internalDimensions}
        onResizeStart={(e) => {
          updateInternalDimensionsInPx();
          e.preventDefault();
          e.stopPropagation();
          const dom = resizable.current.resizable;
          if (!dom) return;
          editingDimensions.current = {
            width: dom.getBoundingClientRect().width,
            height: dom.getBoundingClientRect().height,
          };
          isResizing.current = true;
        }}
        onResize={(_, __, ___, d) => {
          const dom = resizable.current.resizable;
          let { width, height }: any = getUpdatedDimensions(d.width, d.height);
          if (isPercentage(nodeWidth))
            width =
              pxToPercent(
                width,
                getElementDimensions(dom.parentElement).width
              ) + "%";
          else width = `${width}px`;

          if (isPercentage(nodeHeight))
            height =
              pxToPercent(
                height,
                getElementDimensions(dom.parentElement).height
              ) + "%";
          else height = `${height}px`;

          if (isPercentage(width) && dom.parentElement.style.width === "auto") {
            width = editingDimensions.current.width + d.width + "px";
          }

          if (
            isPercentage(height) &&
            dom.parentElement.style.height === "auto"
          ) {
            height = editingDimensions.current.height + d.height + "px";
          }

          setProp((prop: any) => {
            prop[propKey.width] = width;
            prop[propKey.height] = height;
          }, 500);
          console.log({
            width,
            height,
          });

          props?.onResizeFn?.({
            width,
            height,
          });
        }}
        onResizeStop={() => {
          isResizing.current = false;
          updateInternalDimensionsWithOriginal();
        }}
        {..._props}
      >
        {children}
        {active && !isNoFourHorn && (
          <Indicators bound={fillSpace === "yes" ? parentDirection : false}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Indicators>
        )}

        {active && isNoFourHorn && (
          <Indicators
            bound={fillSpace === "yes" ? parentDirection : false}
          ></Indicators>
        )}
      </Resizable>
    </Draggable>
  );
};