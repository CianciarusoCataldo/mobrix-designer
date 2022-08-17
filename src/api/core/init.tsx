import React from "react";
import { MoBrixEngineConfig, MoBrixEngineStore } from "mobrix-engine-types";

import {
  MoBrixDesignerConfig,
  MoBrixDesignerComponent,
} from "mobrix-designer-types";
import { formatConfig, parsePlugins } from "../helpers/init-helper";
import App from "../components/App";

/**
 * Init {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} system, and returns the already configured app,
 * that can be rendered
 *
 * @param {MoBrixEngineStore} store redux store, used to drive app components (eventually enhanced with `MoBrix-engine`)
 * @param {MoBrixDesignerConfig} creatorConfig app config, to determine which components will be rendered and where
 * @param {MoBrixEngineConfig} engine MoBrix-engine output config (returned by initEngine function)
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const initMoBrixDesigner = (props?: {
  creatorConfig?: MoBrixDesignerConfig;
  engineConfig?: MoBrixEngineConfig;
  store?: MoBrixEngineStore;
}) => {
  let inputCreatorConfig: MoBrixDesignerConfig = {};
  let inputEngineConfig: MoBrixEngineConfig = {};
  let internalComponents: MoBrixDesignerComponent[] = [];
  let externalComponents: MoBrixDesignerComponent[] = [];
  let store: MoBrixEngineStore;

  if (props) {
    store = props.store;
    inputCreatorConfig = formatConfig(props.creatorConfig);
    inputEngineConfig = props.engineConfig || {};

    if (store) {
      const pluginsOutput = parsePlugins(
        inputCreatorConfig,
        props.engineConfig
      );

      externalComponents = pluginsOutput.externalComponents;
      internalComponents = pluginsOutput.internalComponents;
      inputCreatorConfig = pluginsOutput.creatorConfig;
    }
  }

  const refreshHeight = () => {
    const app = window.document.getElementById("app-container");
    if (app) {
      app.style.height = `${window.innerHeight}px`;
    }
  };

  window.addEventListener("resize", refreshHeight);

  window.addEventListener("orientationchange", refreshHeight);

  return {
    App: (
      <App
        store={store}
        creatorConfig={inputCreatorConfig}
        internalComponents={internalComponents}
        externalComponents={externalComponents}
      />
    ),
    config: inputCreatorConfig,
  };
};

export default initMoBrixDesigner;
