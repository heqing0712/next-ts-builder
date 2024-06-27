"use client";
import { Editor, Frame, Element } from "@/libs/craftjs/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { NextSeo } from "next-seo";
import React from "react";
import { Viewport, RenderNode } from "@/components/editor";
import { Container, Section, Text } from "@/components/selectors";
import { Button } from "@/components/selectors/Button";
import { Custom1, OnlyButtons } from "@/components/selectors/Custom1";
import { Custom2, Custom2VideoDrop } from "@/components/selectors/Custom2";
import { Custom3, Custom3BtnDrop } from "@/components/selectors/Custom3";
import { Video } from "@/components/selectors/Video";
import "./styles/root.scss";
import "./styles/app.css";
import "./styles/common.scss";
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

function App() {
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
        <Editor
          resolver={{
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
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame>
              <Element
                canvas
                is={Section}
                width="800px"
                height="400px"
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                custom={{ displayName: "Section" }}
              ></Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;
