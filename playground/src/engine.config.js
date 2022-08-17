import {
  epicsPlugin,
  localizationPlugin,
  modalPlugin,
  routerPlugin,
  themerPlugin,
  uiPlugin,
  urlCheckerPlugin,
} from "mobrix-engine-plugins";

const engineConfig = {
  appName: "MoBrix-designer",
  debug: false,
  plugins: [
    localizationPlugin,
    epicsPlugin,
    routerPlugin,
    modalPlugin,
    themerPlugin,
    uiPlugin,
    urlCheckerPlugin,
  ],
  router: {
    basename: "/mobrix-designer",
    homePage: "HomePage",
    routes: {
      HomePage: "/",
    },
  },
  localization: {
    fallbackLanguage: "en",
    supportedLanguages: ["en", "it", "es", "fr", "de"],
    namespaces: ["common", "homepage"],
    defaultNamespace: "common",
    loadPath: "/mobrix-designer/locales/{{lng}}/{{ns}}.json",
    titlesNamespace: "pages",
  },
  ui: {
    darkMode: true,
    drawer: true,
  },
  theme: {
    default: {
      bodyColor:
        "linear-gradient(0deg, rgba(246,225,203,1) 29%, rgba(219,232,235,1) 100%)",
      uiColor:
        "linear-gradient(317deg, rgb(251, 251, 251) 0%, rgb(238, 238, 238) 71%, rgb(246, 246, 246) 100%);",
    },
    dark: {
      uiColor:
        "linear-gradient(108deg, rgba(74,59,53,1) 0%, rgba(33,35,61,1) 48%, rgba(12,17,18,1) 100%)",
      bodyColor: "linear-gradient(rgba(50,51,71,1) 48%, rgba(12,17,18,1) 100%)",
    },
  },
};

export default engineConfig;
