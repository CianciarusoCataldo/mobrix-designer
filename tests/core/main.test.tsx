import PKG from "../../package.json";

import initApplicationTest from "../test-suites/init";

import AppErrorBoundaryTest from "../test-suites/components/AppErrorBoundary";
import { initEngine } from "mobrix-engine";

describe(`\n                       ## ${PKG.name} - v.${PKG.version} - Unit tests ##`, () => {
  const { store } = initEngine();

  initApplicationTest(store);
  describe("\n   Components", () => {
    AppErrorBoundaryTest();
  });
});
