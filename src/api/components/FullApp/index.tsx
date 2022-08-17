import { MoBrixDesignerComponent } from "mobrix-designer-types";
import React from "react";

import { Provider } from "react-redux";
import BasicApp from "../BasicApp";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} full app, rendered when a validstore is provided
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const FullApp: MoBrixDesignerComponent<
  {},
  {
    internalComponents: MoBrixDesignerComponent[];
    externalComponents: MoBrixDesignerComponent[];
  }
> = ({ creatorConfig, store, externalComponents, internalComponents }) => {
  return (
    <Provider store={store!}>
      {externalComponents.map((ExternalComponent, key) => (
        <div key={`plugin_${key}_external_component`}>
          <ExternalComponent creatorConfig={creatorConfig} store={store} />
        </div>
      ))}
      <BasicApp creatorConfig={creatorConfig}>
        <div style={{ height: "100%", overflow: "auto", width: "100%" }}>
          {internalComponents.map((InternalComponent, key) => (
            <div key={`plugin_${key}_internal_component`}>
              <InternalComponent creatorConfig={creatorConfig} store={store} />
            </div>
          ))}
        </div>
      </BasicApp>
    </Provider>
  );
};

export default FullApp;
