import React from "react";

import {
  formsPlugin,
  drawerPlugin,
  pageRouterPlugin,
} from "mobrix-designer-plugins";

import DrawerContent from "./contents/drawer";
import footer from "./contents/footer";
import header from "./contents/header";
import modals from "./contents/modals";

const appConfig = {
  plugins: [formsPlugin, drawerPlugin, pageRouterPlugin],
  preloader: () => <div className="preloader" />,
  pageRouter: {
    render: (route) => React.lazy(() => import(`./pages/${route}`)),
  },
  forms: {
    modals,
  },
  header,
  footer,
  drawer: {
    content: DrawerContent,
  },
};

export default appConfig;
