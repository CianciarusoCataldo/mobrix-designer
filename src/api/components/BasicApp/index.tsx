import { MoBrixDesignerComponent } from "mobrix-designer-types";
import React from "react";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} basic app, rendered when a valid store is not provided
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const BasicApp: MoBrixDesignerComponent<
  {},
  {
    children?: JSX.Element | JSX.Element[];
  }
> = ({ creatorConfig, children }) => {
  const CustomContent = creatorConfig.content;
  const HeaderContent = creatorConfig.header;
  const FooterContent = creatorConfig.footer;

  return (
    <div
      id="basic-app"
      style={{
        height: "100%",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {HeaderContent && (
        <header
          style={{
            position: "relative",
            top: "0",
            right: "0",
            left: "0",
            width: "100%",
          }}
        >
          <HeaderContent />
        </header>
      )}
      {children}
      {CustomContent && <CustomContent />}
      {FooterContent && (
        <footer
          style={{
            width: "100%",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        >
          <FooterContent />
        </footer>
      )}
    </div>
  );
};

export default BasicApp;
