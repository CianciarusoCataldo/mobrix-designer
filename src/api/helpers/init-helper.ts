import { MoBrixEngineConfig } from "mobrix-engine-types";

import {
  MoBrixDesignerComponent,
  MoBrixDesignerConfig,
} from "mobrix-designer-types";

export const formatConfig = (
  config?: MoBrixDesignerConfig
): MoBrixDesignerConfig => {
  let creatorConfig = config || {};
  return {
    ...creatorConfig,
    core: creatorConfig.core || {},
    plugins: creatorConfig.plugins || [],
  };
};

export const parsePlugins = (
  creatorConfig: MoBrixDesignerConfig,
  engineConfig?: MoBrixEngineConfig
) => {
  let creator = { ...creatorConfig };

  let plugins = creator.plugins;
  let enabledPlugins: Record<string, Record<string, any>> = {};
  let pluginFieldsMap: Record<string, string> = {};

  let externalComponents: MoBrixDesignerComponent[] = [];
  let internalComponents: MoBrixDesignerComponent[] = [];

  let beforeInitActions: ((
    config: MoBrixDesignerConfig
  ) => Record<string, any>)[] = [];

  plugins.forEach((plugin) => {
    if (plugin.feature && plugin.type === "mobrix-designer-plugin") {
      enabledPlugins[plugin.feature] = {};
      const pluginOutput = plugin();

      if (pluginOutput.field) {
        const field = pluginOutput.field(creator);

        if (field && field.name) {
          pluginFieldsMap[plugin.feature] = field.name;
          enabledPlugins[plugin.feature] = field.content;
          creator[field.name] = field.content || {};
        }
      }

      pluginOutput.internalComponent &&
        internalComponents.push(pluginOutput.internalComponent);

      pluginOutput.externalComponent &&
        externalComponents.push(pluginOutput.externalComponent);

      pluginOutput.before && beforeInitActions.push(pluginOutput.before);
    }
  });

  if (engineConfig?.core?.designerInteractions) {
    engineConfig.core.designerInteractions.forEach((interaction) => {
      if (
        enabledPlugins[interaction.plugin] &&
        pluginFieldsMap[interaction.plugin]
      ) {
        creator[pluginFieldsMap[interaction.plugin]] = interaction.effect(
          enabledPlugins[interaction.plugin],
          engineConfig
        );

        enabledPlugins[interaction.plugin] =
          creator[pluginFieldsMap[interaction.plugin]];
      }
    });
  }

  beforeInitActions.forEach((action) => action(creator));

  return {
    externalComponents,
    internalComponents,
    engineConfig,
    creatorConfig: creator,
  };
};
