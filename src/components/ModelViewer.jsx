import React, { useEffect, useState } from "react";
import { ModelViewerStyle } from "./components.style";

function ModelViewer({ selectedItem }) {
  const { src, title: name } = selectedItem;
  const isVirtualTour = name === "Virtual Tour";
  const [fullScreen, setFullScreen] = useState(false);
  useEffect(() => {
    console.log(name, isVirtualTour);
    enterFullScreenMode();
  }, [name]);

  console.log(fullScreen);

  const enterFullScreenMode = () => {
    if (isVirtualTour) {
      let enteredFullScreen = false;
      let container = document.getElementById("viewer-container");
      if (container.requestFullscreen) {
        container.requestFullscreen();
        enteredFullScreen = true;
      } else if (container.webkitRequestFullscreen) {
        /* Safari */
        container.webkitRequestFullscreen();
        enteredFullScreen = true;
      } else if (container.msRequestFullscreen) {
        /* IE11 */
        container.msRequestFullscreen();
        enteredFullScreen = true;
      }

      if (enteredFullScreen)
        container.addEventListener("fullscreenchange", () => {
          if (document.fullscreenElement !== null) setFullScreen(true);
          else setFullScreen(false);
        });
    }
  };

  const exitFullScreenMode = () => {
    document.exitFullscreen();
  };
  return (
    <ModelViewerStyle>
      {src == "plan" ? (
        <img src={`${process.env.PUBLIC_URL}/master.png`} />
      ) : (
        <div id="viewer-container">
          {isVirtualTour && (
            <div
              className="close-btn"
              onClick={fullScreen ? exitFullScreenMode : enterFullScreenMode}
            >
              {fullScreen ? (
                <img src={`${process.env.PUBLIC_URL}/cancel.png`} />
              ) : (
                <img src={`${process.env.PUBLIC_URL}/fullscreen.png`} />
              )}
            </div>
          )}
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
        </div>
      )}
    </ModelViewerStyle>
  );
}

export default ModelViewer;
