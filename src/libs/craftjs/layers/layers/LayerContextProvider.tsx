import { useEditor } from "@/libs/craftjs/core";
import { wrapConnectorHooks } from "@/libs/craftjs/utils";
import React, { useMemo, useContext, useRef, useEffect } from "react";

import { LayerContext, LayerContextType } from "./LayerContext";
import { LayerNode } from "./LayerNode";

import { useLayerEventHandler } from "../events/LayerEventContext";
import { LayerManagerContext } from "../manager";

export const LayerContextProvider: React.FC<
  Omit<LayerContextType, "connectors">
> = ({ id, depth }) => {
  const handlers = useLayerEventHandler();

  const { store } = useContext(LayerManagerContext);
  const storeRef = useRef(store);
  storeRef.current = store;

  const connectorsUsage = useMemo(
    () => handlers.createConnectorsUsage(),
    [handlers]
  );

  const connectors = useMemo(
    () => wrapConnectorHooks(connectorsUsage.connectors),
    [connectorsUsage]
  );

  useEffect(() => {
    connectorsUsage.register();

    return () => {
      connectorsUsage.cleanup();
    };
  }, [connectorsUsage]);

  const { exists } = useEditor((state) => ({
    exists: !!state.nodes[id],
  }));

  if (!exists) {
    return null;
  }

  return (
    <LayerContext.Provider value={{ id, depth, connectors }}>
      <LayerNode />
    </LayerContext.Provider>
  );
};
