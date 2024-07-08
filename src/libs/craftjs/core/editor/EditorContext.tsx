import { createContext } from "react";

import { EditorStore } from "./store";

export type EditorContextType = EditorStore;
export const EditorContext = createContext<EditorContextType>(null);

let editorContext: EditorContextType;

export function setEditorContext(v: EditorContextType) {
  editorContext = v;
}

export function getEditorContext() {
  return editorContext;
}
