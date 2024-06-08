import { proxy, useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import Decimal from "decimal.js";
import { BuilderToolsEnum } from "@/configs/enums/BuilderToolsEnum";

export const appState = proxy({
  /**
   * 禁止放大
   */
  disableZoom: true,
  /**
   * 禁止拖动
   */
  disablePan: true,
  /**
   * 选中的工具栏
   */
  activeTool: BuilderToolsEnum.ARROW,
  /**
   * 面板缩放信息
   */
  mapInfo: {
    scale: 1,
    translation: { x: 0, y: 20 },
  },
  /***
   * 缩放比例
   */
  scalePs: 100,

  /**
   * 设置活跃工具栏
   * @param val
   */
  setActiveTool(val: BuilderToolsEnum) {
    appState.activeTool = val;
  },

  /**
   * 设置x轴距离
   * @param v
   */
  setX(v: number) {
    appState.mapInfo.translation.x = v;
  },
  /**
   * 获取面板信息
   * @returns
   */
  getMapInfo() {
    return {
      scale: appState.mapInfo.scale,
      translation: { ...appState.mapInfo.translation },
    };
  },
  /**
   * 设置面板信息
   * @param mapInfo
   */
  setMapInfo(mapInfo: any) {
    if (mapInfo !== undefined) {
      appState.mapInfo = mapInfo;
    }
  },
});

/**
 * 监听面板信息，订阅更新
 */
subscribeKey(appState, "mapInfo", () => {
  const val = appState.mapInfo.scale.toFixed(2);
  const bigNumber = new Decimal(val).mul(100);
  appState.scalePs = Number(bigNumber.toString());
});

/**
 * 监听面板信息，订阅更新
 */
subscribeKey(appState, "activeTool", () => {
  if (appState.activeTool === BuilderToolsEnum.HAND) {
    appState.disablePan = false;
    appState.disableZoom = false;
  } else {
    appState.disablePan = true;
    appState.disableZoom = true;
  }
});

export const useAppState = () => {
  return useSnapshot(appState);
};
