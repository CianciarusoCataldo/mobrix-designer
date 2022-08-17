import React from "react";

import { mount } from "enzyme";

import AppErrorBoundary from "../../../src/api/components/AppErrorBoundary";

const AppErrorBoundaryTest = () => {
  describe("\n     AppErrorBoundary\n", () => {
    test("renders children if no error", () => {
      const wrapper = mount(
        <AppErrorBoundary>
          <div />
        </AppErrorBoundary>
      );
      expect(wrapper);
    });

    test("renders fallback if an error occurs", () => {
      const error = console.error;
      console.error = () => {};
      const ComponentWithError = ({}) => {
        throw new Error("test error");
      };

      const ComponentToTest = (
        <AppErrorBoundary>
          <ComponentWithError />
        </AppErrorBoundary>
      );

      const wrapper = mount(ComponentToTest);

      wrapper.find(".error-button").simulate("click");
      console.error = error;
      expect(wrapper);
    });
  });
};

export default AppErrorBoundaryTest;
