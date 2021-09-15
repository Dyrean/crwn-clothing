import React, { useEffect } from "react";
import { getWithExpiry, setWithExpiry } from "./storage";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-fallback.styles";

export const ErrorCom = ({ error }) => {
  // Handles failed lazy loading of a JS/CSS chunk.
  useEffect(() => {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    console.log("Error: " + error.message);
    if (error?.message && chunkFailedMessage.test(error.message)) {
      if (!getWithExpiry("chunk_failed")) {
        setWithExpiry("chunk_failed", "true", 10000);
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl="https://error404.fun/img/illustrations/24.png" />
      <ErrorImageText>
        Sorry, We can't find the page that you are looking for
      </ErrorImageText>
    </ErrorImageOverlay>
  );
};
export default ErrorCom;
