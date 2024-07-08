import { proxy, useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";

// import { EditorStore } from "@/types/EditorStore";
/**
 * Editor store
 */
export interface CjEditorStore {
  /**
   * 活跃组件id
   */
  activeComponentId: string;
  /**
   * 是否显示组件容器
   */
  showComponentsPannel: boolean;
  /**
   * 设置显示组件容器
   */
  setShowComponentsPannel: Fn;
  /**
   * 设置活跃组件id
   */
  setActiveComponentId: Fn;
}

export const editorStore = proxy<CjEditorStore>({
  activeComponentId: "",
  showComponentsPannel: false,
  setShowComponentsPannel(v: boolean) {
    editorStore.showComponentsPannel = v;
  },
  setActiveComponentId(id: string) {
    editorStore.activeComponentId = id;
  },
});

/**
 *
 * @returns editor store hooks
 */
export const useCjEditorStore = (): CjEditorStore => {
  return useSnapshot(editorStore);
};
