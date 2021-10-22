import React from "react";
import { ModelViewerStyle } from "./components.style";

function ModelViewer({ src }) {
  return (
    <ModelViewerStyle>
      <iframe
        height="100%"
        width="100%"
        id="6b0ec302-ba89-4dbf-99d5-6fcfe3d661b2"
        src={src}
        frameBorder="0"
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        scrolling="no"
      ></iframe>
    </ModelViewerStyle>
  );
}

export default ModelViewer;
