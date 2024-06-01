import Arrow from "@/assets/icons/arrow.svg";
import Hand from "@/assets/icons/hand.svg";
import Message from "@/assets/icons/message.svg";
import ThemeLight from "@/assets/icons/themeLight.svg";
import ThemeDark from "@/assets/icons/themeLight.svg";
import { BuilderToolsEnum } from "@/configs/enums/BuilderToolsEnum";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
type Checked = DropdownMenuCheckboxItemProps["checked"];

export function BuilderTools() {
  const [activeTool, setActiveTool] = useState(BuilderToolsEnum.ARROW);

  const { theme, setTheme } = useTheme();

  function getThemeDom() {
    if (theme === "dark") {
      return <ThemeLight onClick={() => setTheme("light")} />;
    } else {
      return <ThemeDark onClick={() => setTheme("dark")} />;
    }
  }

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <>
      <div className="builder-tools">
        <div className="tools-item">
          <div
            className={[
              "tools-icon",
              activeTool === BuilderToolsEnum.ARROW ? "is-active" : "",
            ].join(" ")}
          >
            <Arrow />
          </div>
        </div>
        <div className="tools-item">
          <div
            className={[
              "tools-icon",
              activeTool === BuilderToolsEnum.HAND ? "is-active" : "",
            ].join(" ")}
          >
            <Hand />
          </div>
        </div>
        <div className="tools-item">
          <div
            className={[
              "tools-icon",
              activeTool === BuilderToolsEnum.MESSAGE ? "is-active" : "",
            ].join(" ")}
          >
            <Message />
          </div>
        </div>
        <div className="tools-item">
          <div
            className={[
              "tools-icon",
              activeTool === BuilderToolsEnum.THEME ? "is-active" : "",
            ].join(" ")}
          >
            {theme === "dark" ? (
              <ThemeLight onClick={() => setTheme("light")} />
            ) : (
              <ThemeDark onClick={() => setTheme("dark")} />
            )}
          </div>
        </div>

        <div className="tools-item selectZoom">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
