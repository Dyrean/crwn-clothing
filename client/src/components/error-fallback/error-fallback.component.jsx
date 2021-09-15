import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-fallback.styles";

class ErrorFallback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    // Process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://error404.fun/img/illustrations/24.png" />
          <ErrorImageText>
            Sorry, We can't find the page that you are looking for
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorFallback;
