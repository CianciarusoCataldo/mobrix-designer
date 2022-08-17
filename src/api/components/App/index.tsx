import { MoBrixDesignerComponent } from "mobrix-designer-types";

import React from "react";

import ErrorBoundary from "../AppErrorBoundary";
import BasicApp from "../BasicApp";
import FullApp from "../FullApp";

const App: MoBrixDesignerComponent<
  {},
  {
    internalComponents: MoBrixDesignerComponent[];
    externalComponents: MoBrixDesignerComponent[];
  }
> = ({ creatorConfig, store, externalComponents, internalComponents }) => {
  const Preloader = creatorConfig.preloader;

  return (
    <React.Suspense fallback={Preloader ? <Preloader /> : <div />}>
      <ErrorBoundary fallback={creatorConfig.error}>
        <div id="app-container" style={{ height: `${window.innerHeight}px` }}>
          {store ? (
            <FullApp
              store={store}
              creatorConfig={creatorConfig}
              internalComponents={internalComponents}
              externalComponents={externalComponents}
            />
          ) : (
            <BasicApp creatorConfig={creatorConfig} />
          )}
        </div>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default App;
