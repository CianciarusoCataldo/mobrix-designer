import React from "react";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-designer MoBrix-designer} error boundary, wrap all App components to intercept most of the errors thrown
 *
 * @param {() => JSX.Element} fallback custom fallback displayed when an error is catched
 *
 * @see https://cianciarusocataldo.github.io/mobrix-designer/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
class ErrorBoundary extends React.Component<
  { fallback?: () => JSX.Element } & Record<string, any>,
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      window.document.title = "Error";
      return (
        this.props.fallback || (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ margin: "auto" }}>
              <button
                style={{ fontSize: "3rem", padding: "1rem" }}
                className="error-button"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
