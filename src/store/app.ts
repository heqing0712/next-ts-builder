import { proxy, useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import Decimal from "decimal.js";
import { BuilderToolsEnum } from "@/configs/enums/BuilderToolsEnum";
import { MapRef } from "@/types/MapRef";
interface AppStore {
  disableZoom: boolean;
  disablePan: boolean;
  activeTool: BuilderToolsEnum;
  mapInfo: object;
  scalePs: number;

  setActiveTool: Fn;
  setX: Fn;
  getMapInfo: Fn;
  setMapInfo: Fn;
}
let mapRef: Nullable<MapRef>;

export const appStore = proxy<AppStore>({
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
    appStore.activeTool = val;
  },

  /**
   * 设置x轴距离
   * @param v
   */
  setX(v: number) {
    appStore.mapInfo.translation.x = v;
  },
  /**
   * 获取面板信息
   * @returns
   */
  getMapInfo() {
    return {
      scale: appStore.mapInfo.scale,
      translation: { ...appStore.mapInfo.translation },
    };
  },
  /**
   * 设置面板信息
   * @param mapInfo
   */
  setMapInfo(mapInfo: any) {
    if (mapInfo !== undefined) {
      appStore.mapInfo = mapInfo;
    }
  },
});

/**
 * 监听面板信息，订阅更新
 */
subscribeKey(appStore, "mapInfo", () => {
  const val = appStore.mapInfo.scale.toFixed(2);
  const bigNumber = new Decimal(val).mul(100);
  appStore.scalePs = Number(bigNumber.toString());
});

/**
 * 监听面板信息，订阅更新
 */
subscribeKey(appStore, "activeTool", () => {
  if (appStore.activeTool === BuilderToolsEnum.HAND) {
    appStore.disablePan = false;
    appStore.disableZoom = false;
  } else {
    appStore.disablePan = true;
    appStore.disableZoom = true;
  }
});

export function setMapInfo(v: MapRef) {
  mapRef = v;
}

export function getMapInfo() {
  return mapRef;
}

export const useAppStore = () => {
  return useSnapshot(appStore);
};
