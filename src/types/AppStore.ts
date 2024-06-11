import { BuilderToolsEnum } from "@/configs/enums/BuilderToolsEnum";

/**
 * App Store
 */
export interface AppStore {
  /**
   * 禁止放大
   */
  disableZoom: boolean;
  /**
   * 禁止拖动
   */
  disablePan: boolean;
  /**
   * 选中的工具栏
   */
  activeTool: BuilderToolsEnum;
  /**
   * 面板缩放信息
   */
  mapInfo: object;
  /***
   * 缩放比例
   */
  scalePs: number;
  /**
   * 设置活跃工具栏
   * @param val
   */
  setActiveTool: Fn;
  /**
   * 设置x轴距离
   * @param v
   */
  setX: Fn;
  /**
   * 获取面板信息
   * @returns
   */
  getMapInfo: Fn;
  /**
   * 设置面板信息
   * @param mapInfo
   */
  setMapInfo: Fn;
}
