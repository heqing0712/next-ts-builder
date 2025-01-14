import { ROOT_NODE } from "@/libs/craftjs/utils";
import React from "react";

import { LayerOptions } from "./interfaces";
import { LayerContextProvider } from "./layers/LayerContextProvider";
import { LayerManagerProvider } from "./manager/LayerManagerProvider";
export {
  useLayer,
  DefaultLayer,
  DefaultLayerHeader,
  EditableLayerName,
} from "./layers";

export const Layers: React.FC<Partial<LayerOptions>> = ({ ...options }) => {
  return (
    <LayerManagerProvider options={options}>
      <LayerContextProvider id={ROOT_NODE} depth={0} />
    </LayerManagerProvider>
  );
};
