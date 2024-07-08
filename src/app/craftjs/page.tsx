"use client";
import { Editor, Frame, Element } from "@/libs/craftjs/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import React, { useState } from "react";
import { Viewport, RenderNode } from "@/components/editor";
import { Container, Section, Text, Box } from "@/components/selectors";
import { Button } from "@/components/selectors/Button";
import { Custom1, OnlyButtons } from "@/components/selectors/Custom1";
import { Custom2, Custom2VideoDrop } from "@/components/selectors/Custom2";
import { Custom3, Custom3BtnDrop } from "@/components/selectors/Custom3";
import { Video } from "@/components/selectors/Video";
import { ComponentsPannel } from "./components/ComponentsPannel";
import { ButtonDemo } from "@/components/selectors/ButtonDemo";
import "./styles/root.scss";
import "./styles/base.scss";
import "./styles/app.scss";
import Draggable from "react-draggable";
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
let main;
let oX;
let oY;
function App() {
  const useDrag = ({ x, y }: { x: number; y: number }) => {
    const [xy, setXy] = useState({
      x,
      y,
    });

    function onStart(e) {
      if (oX === undefined) {
        if (!main) {
          main = document.getElementById("main");
        }

        const mainRect = main?.getBoundingClientRect();
        const dragRect = e.target.getBoundingClientRect();

        oY = parseInt(dragRect.top - mainRect.top);
        oX = parseInt(dragRect.left - mainRect?.left);
        console.log("开始", {
          oY,
          oX,
        });
      }
    }

    function handleOnDrag(e, ui) {
      // console.log({
      //   e,
      //   ui,
      // });
      console.log({
        oX,
        oY,
      });
      setXy({
        x: oX + ui.x,
        y: oY + ui.y,
      });

      console.log(xy);
    }

    return {
      xy,
      setXy,
      handleOnDrag,
      onStart,
    };
  };

  const drag1 = useDrag({
    x: 0,
    y: 0,
  });
  const drag2 = useDrag({
    x: 0,
    y: 0,
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="h-full h-screen">
        <NextSeo
          title="Craft.js"
          description="A React framework for building drag-n-drop page editors."
          canonical="https://craft.js.org/"
          twitter={{
            site: "craft.js.org",
            cardType: "summary_large_image",
          }}
        />
        <ComponentsPannel />

        <Editor
          resolver={{
            ButtonDemo,
            Container,
            Text,
            Custom1,
            Custom2,
            Custom2VideoDrop,
            Custom3,
            Custom3BtnDrop,
            OnlyButtons,
            Button,
            Section,
            Video,
            Box,
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <div className="main" id="main">
              {/* <div
                className="sbox sbox1"
                style={{ marginLeft: drag1.xy.x, marginTop: drag1.xy.y }}
              ></div>
              <Draggable bounds="parent" onDrag={drag1.handleOnDrag}>
                <div className="drag drag1"></div>
              </Draggable> */}
              <div
                className="sbox sbox2"
                style={{ marginLeft: drag2.xy.x, marginTop: drag2.xy.y }}
              ></div>
              <Draggable
                bounds="parent"
                onDrag={drag2.handleOnDrag}
                onStart={drag2.onStart}
              >
                <div className="drag drag2"></div>
              </Draggable>
            </div>
            <Frame>
              <Element
                canvas
                is={Container}
                width="800px"
                height="auto"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                custom={{ displayName: "App" }}
              >
                <Element
                  canvas
                  is={Section}
                  width="800px"
                  height="400px"
                  background={{ r: 255, g: 255, b: 255, a: 1 }}
                  custom={{ displayName: "Section" }}
                ></Element>
              </Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;
