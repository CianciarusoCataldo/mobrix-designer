import React from "react";

import { MoBrixEngineStore } from "mobrix-engine-types";
import initMoBrixDesigner from "../../src/api/core/init";
import { createMoBrixDesignerPlugin } from "mobrix-designer-tools";
import { mount } from "enzyme";

const runTest = (store: MoBrixEngineStore) => {
  const appConfig = {
    core: { engineSync: (config) => config },
    content: () => <div />,
    error: () => <div />,
    preloader: () => (
      <div>
        <div className="preloader" />
      </div>
    ),
    header: () => <div />,
    footer: () => <div />,
    plugins: [
      createMoBrixDesignerPlugin("plugin1", () => ({
        field: () => ({
          name: "plugin1",
          content: {},
        }),
        internalComponent: () => <div />,
        before: (creatorConfig) => creatorConfig,
      })),
      createMoBrixDesignerPlugin("", () => ({
        internalComponent: () => <div />,
      })),
      createMoBrixDesignerPlugin("plugin3", () => ({
        field: () => ({
          name: "plugin3",
        }),
        externalComponent: () => <div />,
        before: () => null,
      })),
    ],
  };

  describe("\n   initApplication\n", () => {
    test("init without parameters", () => {
      process.env.NODE_ENV === "development";
      mount(initMoBrixDesigner().App);
    });

    test("init without any config", () => {
      process.env.NODE_ENV === "development";

      mount(
        initMoBrixDesigner({
          store,
        }).App
      );
    });

    test("init without a store", () => {
      process.env.NODE_ENV === "development";
      mount(
        initMoBrixDesigner({
          creatorConfig: {
            preloader: () => <div />,
            header: () => <div />,
            footer: () => <div />,
            content: () => <div />,
            error: () => <div />,
          },
        }).App
      );

      mount(
        initMoBrixDesigner({
          creatorConfig: {
            header: () => <div />,
            footer: () => <div />,
            content: () => <div />,
            error: () => <div />,
          },
        }).App
      );
    });

    test("init with an empty config", () => {
      process.env.NODE_ENV === "development";

      mount(
        initMoBrixDesigner({
          store,
          creatorConfig: {},
        }).App
      );
    });
    test("init with defined config", () => {
      process.env.NODE_ENV === "development";

      mount(
        initMoBrixDesigner({
          store,
          creatorConfig: appConfig,
          engineConfig: {
            core: {
              designerInteractions: [
                {
                  plugin: "plugin1",
                  effect: (field) => field,
                },
              ],
            },
          },
        }).App
      );
    });
  });
};

export default runTest;
